import React from "react";
import queryString from "query-string";

const apikey =
  "3AAABLblqZhDGh6UYMhCiwy--ZyvlqSAxJ9mJd_iIGo0G0vQ-J3vuthP0uGIHEY9vEYEEJc8U2eF6Ur9dWDfJDJnsZRnu-Al5";

export const Sign = (props) => {
  const params = {
    client_id: "CBJCHBCAABAAbCnZdgULnboAyZAqCU6XAK-f2E-m1v5M",
    client_secret: "tqIVlCMhPsbXOUjku3PvdQ4QYJJNM1Xq"
  };
  /*
  url = http://api.adobesign.com/oauth/token?
    code=CBNCKBAThIsIsNoTaReAlcs_sL4K32wCzs4N&
    client_id=CBAThIsIsNoTaReAlmPBvPF&
    client_secret=319UThIsIsNoTaReAl2-4OxkVo9ycU&
    redirect_uri=https://myserver.com&
    grant_type=authorization_code

    https://api.na4.echosign.com/oauth/token?code=CBNCKBAAHBCAABAADFiaOq5qf-A198Ydx4-O-ezfVa_LoULk&client_id=CBJCHBCAABAAbCnZdgULnboAyZAqCU6XAK-f2E-m1v5M&client_secret=tqIVlCMhPsbXOUjku3PvdQ4QYJJNM1Xq&redirect_uri=https://nri2m.csb.app&grant_type=authorization_code

    https://secure.na1.echosign.com/public/oauth?redirect_uri=https://nri2m.csb.app&response_type=code&client_id=CBJCHBCAABAAbCnZdgULnboAyZAqCU6XAK-f2E-m1v5M&scope=user_login:account+agreement_send:account
*/
  /*
  const call =
    "https://api.na4.echosign.com/oauth/token?code=CBNCKBAAHBCAABAADFiaOq5qf-A198Ydx4-O-ezfVa_LoULk&client_id=CBJCHBCAABAAbCnZdgULnboAyZAqCU6XAK-f2E-m1v5M&client_secret=tqIVlCMhPsbXOUjku3PvdQ4QYJJNM1Xq&redirect_uri=https://nri2m.csb.app&grant_type=authorization_code";

  fetch(call, {
    method: "POST",
    "Content-Type": "application/x-www-form-urlencoded"
  }).then((x) => {
    console.log({ x });
  });
*/

  const parsed = queryString.parse(location.search);

  if (parsed.code) {
    const url = `${parsed.api_access_point}oauth/token?code=${parsed.code}&client_id=${params.client_id}&client_secret=${params.client_secret}&redirect_uri=https://nri2m.csb.app&grant_type=authorization_code`;
    //const url = parsed.api_access_point + "/" + "";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
      .then((x) => x.json())
      .then((res) => {
        if (res.access_token) {
          const docid = "CBJCHBCAABAAiZxtl5_iWqV-cwZxvki7uU6natl8sAXl";

          const baseUrl = `${parsed.api_access_point}api/rest/v6/agreements`;

          fetch(baseUrl, {
            headers: {
              Authorization: `Bearer ${res.access_token}`
            }
          })
            .then((x) => x.json())
            .then((x) => {
              console.log({ x });
            });

          console.log({
            s: res.access_token
          });
        }
      });
  }
  return (
    <div>
      Sign
      <br />
      <a
        id="X"
        href="https://secure.na4.echosign.com/public/oauth?redirect_uri=https://nri2m.csb.app&response_type=code&client_id=CBJCHBCAABAAbCnZdgULnboAyZAqCU6XAK-f2E-m1v5M&scope=user_login:account+agreement_send:account+agreement_read:account"
      >
        Signin
      </a>
    </div>
  );
};
