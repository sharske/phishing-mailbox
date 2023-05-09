import React, { useState } from "react";
function App() {
  // const onClickbutton = (e) => alert({val});
  // const [text, setText] = useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  // const onClickbutton = (e) => alert(val);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('//localhost:3000/users',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, pass })
    })
     .then(response => response.json())
     .then(data => console.log(data))
     .catch(error => console.error(error));
  }

  return (
    <div>
      <img className="amazon-top" src="amazon.png" alt="" />
      <div className="login-frame">
        <h1>ログイン</h1>
        {/* <p className="mailornumber">Eメールまたは携帯電話番号</p> */}

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
          <label>
            パスワード
            <input
              className="input-form"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit" className="next-button">
            次に進む
            {/* <input className="next" type="submit"  value="次に進む"/> */}
          </button>
        </form>
        <div className="agreement">
          <p className="fontsize">
            Amazonの
            <a
              className="url"
              href="https://www.amazon.co.jp/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=643006"
            >
              利用規約
            </a>
            と
            <a
              className="url"
              href="https://www.amazon.co.jp/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=643000"
            >
              プライバシー規約
            </a>
            に同意いただける場合はログインしてください。
          </p>
        </div>
        <div>
          <details>
            <summary className="help">お困りですか？</summary>
            <p>
              <a
                className="url"
                href="https://www.amazon.co.jp/ap/forgotpassword?showRememberMe=true&openid.pape.max_auth_age=0&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=jpflex&mobileBrowserWeblabTreatment=C&openid.return_to=https%3A%2F%2Fwww.amazon.co.jp%2F%3F%26tag%3Dhydjpabky-22%26ref%3Dnav_custrec_signin%26adgrpid%3D119145623274%26hvadid%3D627540356526%26hvqmt%3De%26hvdev%3Dc%26hvtargid%3Dkwd-10573980%26hydadcr%3D27922_14610706&prevRID=XYZ33BHJFX5DQQTSE7AE&openid.assoc_handle=jpflex&openid.mode=checkid_setup&desktopBrowserWeblabTreatment=C&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0"
              >
                パスワードを忘れた場合
              </a>
            </p>
            <p>
              <a
                className="url"
                href="https://www.amazon.co.jp/gp/help/customer/account-issues/ref=ap_login_with_otp_claim_collection?ie=UTF8"
              >
                その他のログインに関する問題
              </a>
            </p>
          </details>
        </div>
      </div>
      <div className="head-border">初めてAmazonをご利用ですか?</div>
      <div className="createbutton">
        <a href="https://www.amazon.co.jp/ap/register?showRememberMe=true&openid.pape.max_auth_age=0&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=jpflex&mobileBrowserWeblabTreatment=C&openid.return_to=https%3A%2F%2Fwww.amazon.co.jp%2F%25E3%2583%25AD%25E3%2582%25B0%25E3%2582%25A4%25E3%2583%25B3%2Fs%3Fk%3D%25E3%2583%25AD%25E3%2582%25B0%25E3%2582%25A4%25E3%2583%25B3%26ref_%3Dnav_signin&prevRID=PXT8E11B4QSG3RBHZT2Y&openid.assoc_handle=jpflex&openid.mode=checkid_setup&desktopBrowserWeblabTreatment=C&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0">
          Amazonアカウントを作成する
        </a>
      </div>
    </div>
  );
}; 


export default App;
