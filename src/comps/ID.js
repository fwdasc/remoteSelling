import React from "react";

/*
export function ID() {
  return <div>ID</div>;
}
*/
const url = "https://api.jochek.com/hk/verify";
const headers = {
  "Content-Type": "application/json",
  "x-api-key": "VqXLkyQYsM1a4uxoEEGkh4z7Kz0hFPBl8Udvm0fr"
};

var body = {
  base64image: ""
};

const init = () => {
  log("checking.....");
  const reader = new FileReader();
  var myFile = document.querySelector("input[type=file]").files[0];
  //console.log(myFile)
  reader.readAsDataURL(myFile);
  reader.onload = () => {
    document.getElementById("image").src = reader.result;
    var raw = reader.result.split(",");
    body.base64image = raw[1];
    check();
  };
};

const log = (msg) => {
  const div = document.getElementById("msg");
  div.innerHTML = JSON.stringify(msg);
};

const check = async () => {
  const data = {
    headers: headers,
    body: JSON.stringify(body),
    method: "POST",
    mode: "no-cors"
  };

  var d1 = new Date();
  const res = await fetch(url, data);
  const result = await res.json();
  var d2 = new Date();
  var seconds = (d2 - d1) / 1000;
  result.seconds = seconds;
  log(result);
  /*
  var d2 = new Date();
  var seconds = (d2 - d1) / 1000;
  result.seconds = seconds;

  log(result);
  */
};

export const IDCheck = () => {
  return (
    <div>
      <div id="iddiv">
        <input type="file" onChange={init} />
        <img src="" id="image" alt=""></img>
      </div>
      <p id="msg"></p>
    </div>
  );
};
