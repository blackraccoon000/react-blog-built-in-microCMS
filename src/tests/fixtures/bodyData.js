const bodyDataOne =
  '<h2 id="ha12a61f0e2"><strong style="color:#bf9eee">Favicon の作成</strong></h2><p><br>webpack&#x2F;webpack.common.js<br></p><pre><code>plugins: [new HtmlWebpackPlugin({title: &#x27;Custom template using Handlebars&#x27;,&#x2F;&#x2F;生成する HTML ファイルfilename: path.resolve(__dirname, &#x27;..&#x2F;public&#x2F;index.html&#x27;),hash: true,&#x2F;&#x2F; テンプレートで使用するファイルのパスを指定 template: path.resolve(__dirname, &#x27;..&#x2F;src&#x2F;template&#x2F;index.html&#x27;),favicon: path.resolve(__dirname, &#x27;..&#x2F;src&#x2F;favicons&#x2F;favicon.ico&#x27;),&#x2F;&#x2F; テンプレートで使用する変数 h1 を設定 &#x2F;&#x2F; h1: &#x27;Heading Title H1&#x27;,}),],</code></pre><p><br>上記のように設定し、<br><span style="color:#62e884">`yarn build:dev`</span> → <span style="color:#62e884">`yarn live-server`</span>と実施すると、icon が表示され、<br>public&#x2F;index.html に下記が追記される。<br><br></p><pre><code>&lt;link rel=&quot;icon&quot; href=&quot;dist&#x2F;favicon.ico?e9d7eedba7ac082e8bb7&quot; &#x2F;&gt;</code></pre><p><br></p><pre><code>&lt;link rel=&quot;icon&quot; href=&quot;dist&#x2F;playwell-icon-260_260.svg?e9d7eedba7ac082e8bb7&quot; &#x2F;&gt;</code></pre><p><br><br>このままだと、いろいろな分岐ができないため、</p><blockquote><span style="color:#62e884">yarn add favicons favicons-webpack-plugin</span>を追加する。</blockquote><p><br>基本的には<a style="color:#f286c4" href="https://github.com/jantimon/html-webpack-plugin" target="_blank" rel="noopener noreferrer">HtmlWebpackPlugin</a>で index.html を出力する過程で、<br>[<span style="color:#f286c4">favicons-webpack-plugin</span>](<span style="color:#97e1f1">https:&#x2F;&#x2F;github.com&#x2F;jantimon&#x2F;favicons-webpack-plugin</span>)を利用し、index.html に作製された favicons の情報を追加する。<br>詳細に内容を設定する場合には、[<span style="color:#f286c4">favicons</span>](<span style="color:#97e1f1">https:&#x2F;&#x2F;github.com&#x2F;itgalaxy&#x2F;favicons#usage</span>)を参考にすると良い。<br><br><span style="color:#62e884">```js</span><br>  plugins: [<br>    <strong style="color:#f286c4">new</strong> <span style="color:#62e884">HtmlWebpackPlugin</span>({<br>      title<span style="color:#f286c4">:</span> <span style="color:#dee492">&#x27;</span><span style="color:#e7ee98">Custom template using Handlebars</span><span style="color:#dee492">&#x27;</span>,<br>      filename<span style="color:#f286c4">:</span> path.<span style="color:#62e884">resolve</span>(__dirname, <span style="color:#dee492">&#x27;</span><span style="color:#e7ee98">..&#x2F;public&#x2F;index.html</span><span style="color:#dee492">&#x27;</span>),<br>      hash<span style="color:#f286c4">:</span> <span style="color:#bf9eee">true</span>,<br>      template<span style="color:#f286c4">:</span> path.<span style="color:#62e884">resolve</span>(__dirname, <span style="color:#dee492">&#x27;</span><span style="color:#e7ee98">..&#x2F;src&#x2F;template&#x2F;index.html</span><span style="color:#dee492">&#x27;</span>),<br>    }),<br>    <strong style="color:#f286c4">new</strong> <span style="color:#62e884">FaviconsWebpackPlugin</span>({<br>      logo<span style="color:#f286c4">:</span> path.<span style="color:#62e884">resolve</span>(<br>        __dirname,<br>        <span style="color:#dee492">&#x27;</span><span style="color:#e7ee98">..&#x2F;src&#x2F;favicons&#x2F;playwell-icon-260_260_2.png</span><span style="color:#dee492">&#x27;</span><br>      ),<br>      cache<span style="color:#f286c4">:</span> <span style="color:#bf9eee">true</span>,<br>      mode<span style="color:#f286c4">:</span> <span style="color:#dee492">&#x27;</span><span style="color:#e7ee98">webapp</span><span style="color:#dee492">&#x27;</span>,<br>      devMode<span style="color:#f286c4">:</span> <span style="color:#dee492">&#x27;</span><span style="color:#e7ee98">light</span><span style="color:#dee492">&#x27;</span>,<br>      version<span style="color:#f286c4">:</span> <span style="color:#dee492">&#x27;</span><span style="color:#e7ee98">1.0</span><span style="color:#dee492">&#x27;</span>,<br>      favicons<span style="color:#f286c4">:</span> {<br>        appName<span style="color:#f286c4">:</span> <span style="color:#dee492">&#x27;</span><span style="color:#e7ee98">react-blog-built-in-microCMS</span><span style="color:#dee492">&#x27;</span>,<br>        appDescription<span style="color:#f286c4">:</span> <span style="color:#dee492">&#x27;</span><span style="color:#e7ee98">React with built in microCMS</span><span style="color:#dee492">&#x27;</span>,<br>        developerName<span style="color:#f286c4">:</span> <span style="color:#dee492">&#x27;</span><span style="color:#e7ee98">Yutaka Fujii</span><span style="color:#dee492">&#x27;</span>,<br>        developerURL<span style="color:#f286c4">:</span><br>          <span style="color:#dee492">&#x27;</span><span style="color:#e7ee98">git@github.com:blackraccoon000&#x2F;react-blog-built-in-microCMS.git</span><span style="color:#dee492">&#x27;</span>,<br>        icons<span style="color:#f286c4">:</span> {<br>          coast<span style="color:#f286c4">:</span> <span style="color:#bf9eee">false</span>,<br>          yandex<span style="color:#f286c4">:</span> <span style="color:#bf9eee">false</span>,<br>        },<br>      },<br>      <span style="color:#62e884">inject</span><span style="color:#f286c4">:</span> (<em style="color:#ffb86c">htmlPlugin</em>) <span style="color:#f286c4">=&gt;</span><br>        <span style="color:#62e884">basename</span>(htmlPlugin.options.filename) <span style="color:#f286c4">===</span> <span style="color:#dee492">&#x27;</span><span style="color:#e7ee98">index.html</span><span style="color:#dee492">&#x27;</span>,<br>    }),<br>  ],<br><span style="color:#62e884">```</span><br><br>参考<br>[<span style="color:#f286c4">webpack で html と favicon も一緒に bundle する</span>](<span style="color:#97e1f1">https:&#x2F;&#x2F;malicia.hatenablog.com&#x2F;entry&#x2F;2018&#x2F;12&#x2F;23&#x2F;004206</span>)<br></p>';

const blogDataSecond =
  '<h2 id="ha12a61f0e2"><strong style="color:#bf9eee">Favicon の作成</strong></h2><p><br></p><pre><code>&#x2F;&#x2F; webpack&#x2F;webpack.common.js plugins: [<br>new HtmlWebpackPlugin({title: &#x27;Custom template using Handlebars&#x27;,&#x2F;&#x2F;生成する HTML ファイル filename: path.resolve(__dirname, &#x27;..&#x2F;public&#x2F;index.html&#x27;), hash: true, &#x2F;&#x2F; テンプレートで使用するファイルのパスを指定 template: path.resolve(__dirname, &#x27;..&#x2F;src&#x2F;template&#x2F;index.html&#x27;), favicon: path.resolve(__dirname, &#x27;..&#x2F;src&#x2F;favicons&#x2F;favicon.ico&#x27;), &#x2F;&#x2F; テンプレートで使用する変数 h1 を設定 &#x2F;&#x2F; h1: &#x27;Heading Title H1&#x27;,}),],</code></pre><p><br>上記のように設定し、<br><code>yarn build:dev</code> → <code>yarn live-server</code>と実施すると、icon が表示され、<br><code>public&#x2F;index.html</code> に下記が追記される。<br><br></p><pre><code>&lt;link rel=&quot;icon&quot; href=&quot;dist&#x2F;favicon.ico?e9d7eedba7ac082e8bb7&quot; &#x2F;&gt;</code></pre><p><br></p><pre><code>&lt;link rel=&quot;icon&quot; href=&quot;dist&#x2F;playwell-icon-260_260.svg?e9d7eedba7ac082e8bb7&quot; &#x2F;&gt;</code></pre><p><br><br>このままだと、いろいろな分岐ができないた<br><code>yarn add favicons favicons-webpack-plugin</code>を追加する。<br><br>基本的には<a style="color:#f286c4" href="https://github.com/jantimon/html-webpack-plugin" target="_blank" rel="noopener noreferrer">HtmlWebpackPlugin</a>で index.html を出力する過程で、<br><a style="color:#f286c4" href="https://github.com/jantimon/favicons-webpack-plugin" target="_blank" rel="noopener noreferrer">favicons-webpack-plugin</a>を利用し、index.html に作製された favicons の情報を追加する。<br>詳細に内容を設定する場合には、<a style="color:#f286c4" href="https://github.com/itgalaxy/favicons#usage" target="_blank" rel="noopener noreferrer">favicons</a>を参考にすると良い。<br></p><pre><code>  plugins: [ new HtmlWebpackPlugin({ title: &#x27;Custom template using Handlebars&#x27;, filename: path.resolve(__dirname, &#x27;..&#x2F;public&#x2F;index.html&#x27;), hash: true, template: path.resolve(__dirname, &#x27;..&#x2F;src&#x2F;template&#x2F;index.html&#x27;),}), new FaviconsWebpackPlugin({logo: path.resolve(__dirname,&#x27;..&#x2F;src&#x2F;favicons&#x2F;playwell-icon-260_260_2.png&#x27;),cache: true,mode: &#x27;webapp&#x27;,devMode: &#x27;light&#x27;,version: &#x27;1.0&#x27;,favicons: {appName: &#x27;react-blog-built-in-microCMS&#x27;,appDescription: &#x27;React with built in microCMS&#x27;,developerName: &#x27;Yutaka Fujii&#x27;,developerURL:&#x27;git@github.com:blackraccoon000&#x2F;react-blog-built-in-microCMS.git&#x27;,icons: {coast: false,yandex: false,},},inject: (htmlPlugin) =&gt;basename(htmlPlugin.options.filename) === &#x27;index.html&#x27;,}),],</code></pre><p><br>参考<br><a style="color:#f286c4" href="https://malicia.hatenablog.com/entry/2018/12/23/004206" target="_blank" rel="noopener noreferrer">webpack で html と favicon も一緒に bundle する</a><br></p>';

export { bodyDataOne, blogDataSecond };
