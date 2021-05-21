1. 対象の microCMS 管理画面
   https://playwell.microcms.io/apis/blog/reference

2. お客様のメールアドレス
   whiteraccoon.breakable@gmail.com

3. 対象のウェブサイト等の URL（あれば）
   まだありません。

4. 不具合内容
   不具合かどうかはわかりませんが、axios などで下記の情報を取得した際、
   totalCount の値がこちらの想定と異なる動作だったため、
   確認のため問い合わせさせていただきました。

"https://playwell.microcms.io/api/v1/blog?fields=id,title,keyword,thumbnail,createdAt,updatedAt,body&limit=4&offset=1"
totalCount: 11

"https://playwell.microcms.io/api/v1/blog?ids=5gdg-uw1v&fields=id,title,keyword,thumbnail,createdAt,updatedAt,body&limit=4&offset=0"
totalCount: 1

"https://playwell.microcms.io/api/v1/blog?ids=5gdg-uw1v,uhrjbmf8xqz3&fields=id,title,keyword,thumbnail,createdAt,updatedAt,body&limit=4&offset=0"
totalCount: 2

クエリで ids を指定した場合、該当データの全件数を取得するための良い方法はあるでしょうか？
ご教授いただければ幸いです。
よろしくお願いいたします。
