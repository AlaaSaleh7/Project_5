import React from "react";
import { useSelector } from "react-redux";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";
import axios from "axios";

export default function ImgUpload() {
  const token = useSelector((state) => {
    return {
      token: state.token.token,
      user: state.token.user,
    };
  });

  const [value, setValue] = useState("");
  const [myurl, setMyurl] = useState("");

  const fileUploadHandler = (e) => {
    e.preventDefault();
    console.log(value[0]);
    const objectURL = URL.createObjectURL(value[0]);
    setMyurl(objectURL);
    console.log("MY URL", myurl);
    axios.post("http://localhost:5000/user/image",({user_id:token.user.id,user_image:myurl}))
    .then((result)=>{
        console.log(result.data);
    })
    .catch((err)=>{
        console.log(err);
    })
  };
  return (
    <div>
      <p>Click on the "Choose File" button to upload a file:</p>

      <Form action="/action_page.php">
        <input
          type="file"
          id="myFile"
          name="filename"
          onChange={(e) => {
            setValue(e.target.files);
          }}
        />
        <button onClick={fileUploadHandler}>upload</button>
        <div
          style={{ width: "400px", height: "400px", border: "1px solid black" }}
        >
          <img src={myurl}></img>
        </div>
      </Form>
    </div>
  );
}
