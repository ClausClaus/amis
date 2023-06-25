amis.define('docs/zh-CN/concepts/datascope-and-datachain.md', function(require, exports, module, define) {

  module.exports = {
    "title": "数据域与数据链",
    "description": null,
    "type": 0,
    "group": "💡 概念",
    "menuName": "数据域与数据链",
    "icon": null,
    "order": 10,
    "html": "<div class=\"markdown-body\"><h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%9A%84%E6%95%B0%E6%8D%AE%E5%B1%95%E7%A4%BA\" href=\"#%E5%9F%BA%E6%9C%AC%E7%9A%84%E6%95%B0%E6%8D%AE%E5%B1%95%E7%A4%BA\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本的数据展示</h2><p>我们再看之前的简单示例：</p>\n<pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"type\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"page\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"body\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Hello World!\"</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<p>目前我们只是在 <code>Page</code> 组件中渲染一串固定的文本，如何实现 <strong>通过接口拉取想要的数据，并展示到 <code>Page</code> 组件的内容区</strong> 呢？</p>\n<h2><a class=\"anchor\" name=\"%E6%B7%BB%E5%8A%A0%E5%88%9D%E5%A7%8B%E5%8C%96%E6%8E%A5%E5%8F%A3\" href=\"#%E6%B7%BB%E5%8A%A0%E5%88%9D%E5%A7%8B%E5%8C%96%E6%8E%A5%E5%8F%A3\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>添加初始化接口</h2><pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"type\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"page\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"initApi\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/page/initData\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"body\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"date is ${date}\"</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<p>这个 api 接口返回的数据结构如下：</p>\n<pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"status\"</span><span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"msg\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"data\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"title\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Test Page Component\"</span><span class=\"token punctuation\">,</span>\n    <span class=\"token property\">\"date\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"2017-10-13\"</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<p>渲染后页面效果：</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"initApi\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/page/initData\",\n  \"body\": \"date is ${date}\"\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88-\" href=\"#%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88-\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>发生了什么?</h2><p>我们可以看到，输出结果不变，但是我们这次渲染的是接口返回的数据：</p>\n<ol>\n<li>首先我们给 <code>Page</code> 组件配置了<code>initApi</code>属性，该属性会在组件初始化时，请求所该属性所配置的接口</li>\n<li>接口请求成功后，<code>Page</code> 会把接口返回的<code>data</code>内数据存到当前的数据域中</li>\n<li><code>Page</code> 在渲染 <code>body</code> 所配置的文本时，会解析文本内容，当解析到模板变量<code>${text}</code>时，amis 会把尝试在当前组件的数据域中获取<code>text</code>变量值，并替换掉<code>${text}</code>，最后渲染解析后的文本。</li>\n</ol>\n<blockquote>\n<p>下一节我们会介绍<a href=\"./template\">模板</a>，<code>body</code>属性自身支持模板语法，amis 中支持模板语法的组件还有很多</p>\n</blockquote>\n<h2><a class=\"anchor\" name=\"%E6%95%B0%E6%8D%AE%E5%9F%9F\" href=\"#%E6%95%B0%E6%8D%AE%E5%9F%9F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>数据域</h2><p>前面我们提到了<strong>数据域</strong>这个概念，它是 amis 中最重要的概念之一。</p>\n<p>还是通过最简单的示例进行讲解：</p>\n<pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"type\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"page\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"body\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Hello ${text}\"</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<p>上面的配置要做的很简单：使用 <code>Page</code> 组件，在内容区内渲染一段模板文字，其中<code>${text}</code>是<strong>模板变量</strong>，它会去到当前组件的数据域中，获取<code>text</code>变量值。</p>\n<p>毫无疑问，<code>${text}</code>将会解析为空白文本，最终渲染的文本是 <code>Hello</code></p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"body\": \"Hello ${text}\"\n}\n</script></div><div class=\"markdown-body\">\n<p>因为当前 <code>Page</code> 组件的数据域中是没有任何数据的，相比之前的示例，区别在于前面我们为 <code>Page</code> 组件配置了初始化接口，它会将接口返回的数据存入数据域中以供组件使用。</p>\n<p>再观察下面这段配置：</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"data\": {\n    \"text\": \"World!\"\n  },\n  \"type\": \"page\",\n  \"body\": \"Hello ${text}\"\n}\n</script></div><div class=\"markdown-body\">\n<p>再次查看渲染结果，顺利输出了 <code>Hello World!</code></p>\n<p>相信你可能已经猜到，<strong>组件的<code>data</code>属性值是数据域的一种形式</strong>，实际上当我们没有显式的配置数据域时，可以假想成这样：</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"data\": {}, // 空的数据域\n  \"type\": \"page\",\n  \"body\": \"Hello ${text}\"\n}\n</script></div><div class=\"markdown-body\">\n<blockquote>\n<p>而前面我们知道 amis 的特性之一是基于组件树，因此自然数据域也会形成类似于树型结构，如何来处理这些数据域之间的联系呢，这就是我们马上要介绍到的 <strong><a href=\"./datascope-and-datachain#%E6%95%B0%E6%8D%AE%E9%93%BE\">数据链</a></strong></p>\n</blockquote>\n<h2><a class=\"anchor\" name=\"%E6%95%B0%E6%8D%AE%E9%93%BE\" href=\"#%E6%95%B0%E6%8D%AE%E9%93%BE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>数据链</h2><p>相信通过上文，你已经基本掌握了 amis 中数据域的概念，接下来我们会介绍另一个重要概念：<strong>数据链</strong>。</p>\n<p><strong>数据链</strong>的特性是，当前组件在遇到获取变量的场景（例如模板渲染、展示表单数据、渲染列表等等）时：</p>\n<ol>\n<li>首先会先尝试在当前组件的数据域中寻找变量，当成功找到变量时，通过数据映射完成渲染，停止寻找过程；</li>\n<li>当在当前数据域中没有找到变量时，则向上寻找，在父组件的数据域中，重复步骤<code>1</code>和<code>2</code>；</li>\n<li>一直寻找，直到顶级节点，也就是<code>page</code>节点，寻找过程结束。</li>\n<li>但是如果 url 中有参数，还会继续向上查找这层，所以很多时候配置中可以直接 <code>${id}</code> 取地址栏参数。</li>\n</ol>\n<blockquote>\n<p>为了方便讲解，我们这一章的例子统一使用的设置组件<code>data</code>属性的方式来初始化数据域，请记住，如果组件支持，你永远可以通过接口来进行数据域的初始化</p>\n</blockquote>\n<p>继续来看这个例子：</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"data\": {\n    \"name\": \"zhangsan\",\n    \"age\": 20\n  },\n  \"body\": [\n    {\n      \"type\": \"tpl\",\n      \"tpl\": \"my name is ${name}\"\n    },\n    {\n      \"type\": \"service\",\n      \"data\": {\n        \"name\": \"lisi\"\n      },\n      \"body\":  {\n        \"type\": \"tpl\",\n        \"tpl\": \"my name is ${name}, I'm ${age} years old\"\n      }\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<p>上面的配置项形成了如下的组件树和数据链：</p>\n<p>组件树：</p>\n<pre><code>page\n  ├─ tpl\n  └─ service\n       └─ tpl\n</code></pre>\n<p>数据链：</p>\n<pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"name\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"zhangsan\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"age\"</span><span class=\"token operator\">:</span> <span class=\"token number\">20</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"__sub\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"name\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"lisi\"</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<blockquote>\n<p><code>__sub</code> 字段只是为了方便理解。</p>\n</blockquote>\n<p>首先，<code>page</code>组件下的<code>tpl</code>组件，在渲染<code>my name is ${name}</code>时，首先会在<code>page</code>的数据域中，尝试寻找<code>name</code>变量，在当前数据域中，<code>name</code>变量为<code>zhangsan</code>，因此寻找变量结束，通过数据映射渲染，输出：<code>my name is zhangsan</code>，渲染结束；</p>\n<p>然后，<code>service</code>组件开始渲染，<code>service</code>组件内子组件<code>tpl</code>，它配置的模板字符串是：<code>my name is ${name}, I&#39;m ${age} years old</code>，它会在<code>service</code>的数据域中，尝试寻找<code>name</code>和<code>age</code>变量。</p>\n<p>由代码可以看出，<code>service</code>数据域中<code>name</code>变量为<code>lisi</code>，因此停止该变量的寻找，接下来寻找<code>age</code>变量。</p>\n<p>很明显在<code>service</code>数据域中寻找<code>age</code>变量会失败，因此向上查找，尝试在<code>page</code>数据域中寻找<code>age</code>变量，找到为<code>20</code>，寻找变量结束，通过数据映射渲染，输出：<code>my name is lisi, I&#39;m 20 years old</code>，渲染结束。</p>\n<blockquote>\n<p><strong>注意：</strong> 当前例子中，对数据域中数据的获取使用的是 <strong>${xxx}</strong> 模板语法，但是在不同的组件配置项中，获取数据的语法会有差异，我们会在后续的<a href=\"./template\">模板</a>和<a href=\"./expression\">表达式章节</a>中一一介绍。</p>\n</blockquote>\n<h3><a class=\"anchor\" name=\"%E5%85%B7%E5%A4%87%E6%95%B0%E6%8D%AE%E5%9F%9F%E7%9A%84%E7%BB%84%E4%BB%B6\" href=\"#%E5%85%B7%E5%A4%87%E6%95%B0%E6%8D%AE%E5%9F%9F%E7%9A%84%E7%BB%84%E4%BB%B6\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>具备数据域的组件</h3><ul>\n<li>App</li>\n<li>Page</li>\n<li>Cards</li>\n<li>Chart</li>\n<li>CRUD</li>\n<li>CRUD2</li>\n<li>Dialog</li>\n<li>Drawer</li>\n<li>List</li>\n<li>Page</li>\n<li>PaginationWrapper</li>\n<li>Service</li>\n<li>Wizard</li>\n<li>Combo</li>\n<li>InputArray</li>\n<li>Table</li>\n<li>Table2</li>\n</ul>\n<p>有个特殊情况是 CRUD 中 filter，实际上是个 form，所以 CRUD 中有两层数据域，第一层是 CRUD 本身，同时查询条件表单中也有一层数据域。</p>\n<h3><a class=\"anchor\" name=\"%E5%B8%B8%E8%A7%81%E8%AF%AF%E8%A7%A3\" href=\"#%E5%B8%B8%E8%A7%81%E8%AF%AF%E8%A7%A3\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>常见误解</h3><p>需要注意，只有少数几个容器组件会创建新的数据域，具体查看<a href=\"#%E5%85%B7%E5%A4%87%E6%95%B0%E6%8D%AE%E5%9F%9F%E7%9A%84%E7%BB%84%E4%BB%B6\">具备数据域的组件</a>列表。</p>\n<p>常见的错误写法是给容器组件加 data 属性，比如：</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"data\": {\n    \"name\": \"zhangsan\"\n  },\n  \"body\": [\n    {\n      \"type\": \"tpl\",\n      \"tpl\": \"my name is ${name}\"\n    },\n    {\n      \"type\": \"container\",\n      \"data\": {\n        \"name\": \"lisi\"\n      },\n      \"body\":  {\n        \"type\": \"tpl\",\n        \"tpl\": \"my name is ${name}\"\n      }\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<p>这样是不会生效的，正确的做法是使用 Service 包裹一层，如下所示</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"data\": {\n    \"name\": \"zhangsan\"\n  },\n  \"body\": [\n    {\n      \"type\": \"tpl\",\n      \"tpl\": \"my name is ${name}\"\n    },\n    {\n      \"type\": \"service\",\n      \"data\": {\n        \"name\": \"lisi\"\n      },\n      \"body\": {\n        \"type\": \"container\",\n        \"body\":  {\n          \"type\": \"tpl\",\n          \"tpl\": \"my name is ${name}\"\n        }\n      }\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%88%9D%E5%A7%8B%E5%8C%96%E6%95%B0%E6%8D%AE%E5%9F%9F\" href=\"#%E5%88%9D%E5%A7%8B%E5%8C%96%E6%95%B0%E6%8D%AE%E5%9F%9F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>初始化数据域</h2><p>通过上面的介绍你可能发现，初始化数据域有两种方式：</p>\n<h3><a class=\"anchor\" name=\"1-%E9%85%8D%E7%BD%AE%E7%BB%84%E4%BB%B6%E5%88%9D%E5%A7%8B%E5%8C%96%E6%8E%A5%E5%8F%A3\" href=\"#1-%E9%85%8D%E7%BD%AE%E7%BB%84%E4%BB%B6%E5%88%9D%E5%A7%8B%E5%8C%96%E6%8E%A5%E5%8F%A3\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>1. 配置组件初始化接口</h3><p>想要将自己的服务中的数据保存到某个组件的数据域中，最好的方式就是为当前组件配置初始化接口：</p>\n<pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"type\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"page\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"initApi\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/initData\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"body\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"Hello ${text}\"</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<p>接口必须按照下面的格式返回：</p>\n<pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"status\"</span><span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"msg\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"data\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"text\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"World!\"</span>\n    ...其他字段\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<p><strong>注意：</strong></p>\n<ol>\n<li><strong>并不是所有组件都支持配置初始化接口来实现数据域初始化操作</strong>，对于那些不支持配置初始化接口的组件来说，一般会使用 <a href=\"../../components/service\"><strong>Service 组件</strong></a> 来辅助实现数据域初始化；</li>\n<li><strong><code>status</code><strong>、</strong><code>msg</code></strong> 和 <strong><code>data</code></strong> 字段为接口返回的必要字段；</li>\n<li><code>data</code>必须返回一个具有<code>key-value</code>结构的对象</li>\n</ol>\n<pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"status\"</span><span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"msg\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"data\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span> <span class=\"token comment\">// 正确</span>\n    <span class=\"token property\">\"text\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"World!\"</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token comment\">// 直接返回字符串或者数组都是无效的</span>\n<span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"status\"</span><span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"msg\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"data\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"some string\"</span> <span class=\"token comment\">// 错误，使用 key 包装</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"status\"</span><span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"msg\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"data\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">\"a\"</span><span class=\"token punctuation\">,</span> <span class=\"token string\">\"b\"</span><span class=\"token punctuation\">]</span> <span class=\"token comment\">// 错误，使用 key 包装</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<blockquote>\n<p><code>api</code> 除了配置字符串格式以外，还可以配置复杂对象结构，更多详情查看<a href=\"../types/api\">API 文档</a></p>\n</blockquote>\n<h3><a class=\"anchor\" name=\"2-%E6%98%BE%E5%BC%8F%E9%85%8D%E7%BD%AE-data-%E5%B1%9E%E6%80%A7%E5%80%BC\" href=\"#2-%E6%98%BE%E5%BC%8F%E9%85%8D%E7%BD%AE-data-%E5%B1%9E%E6%80%A7%E5%80%BC\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>2. 显式配置 data 属性值</h3><p>另一种初始化当前数据域的方式是显式的设置组件的<code>data</code>属性值：</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"data\": {\n    \"text\": \"World!\",\n    \"name\": \"amis\"\n  },\n  \"type\": \"page\",\n  \"body\": \"Hello ${text}, my name is ${name}.\"\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"%E5%90%8C%E6%97%B6%E9%85%8D%E7%BD%AE\" href=\"#%E5%90%8C%E6%97%B6%E9%85%8D%E7%BD%AE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>同时配置</h3><p>在同时配置 <strong>初始化接口</strong> 和 <strong><code>data</code>属性</strong> 时，数据域将会合并<code>data</code>属性值和初始化接口返回的数据</p>\n<h2><a class=\"anchor\" name=\"%E6%9B%B4%E6%96%B0%E6%95%B0%E6%8D%AE%E5%9F%9F\" href=\"#%E6%9B%B4%E6%96%B0%E6%95%B0%E6%8D%AE%E5%9F%9F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>更新数据域</h2><p>部分组件的某些交互或行为会对当前组件的数据域进行更新：</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"body\": {\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n      {\n        \"type\": \"input-text\",\n        \"name\": \"name\",\n        \"label\": \"姓名：\"\n      },\n      {\n        \"type\": \"input-text\",\n        \"name\": \"age\",\n        \"label\": \"年龄：\"\n      },\n      {\n        \"type\": \"static-tpl\",\n        \"tpl\": \"生成的id为：${id}\"\n      }\n    ]\n  }\n}\n</script></div><div class=\"markdown-body\">\n<p><code>/api/saveForm</code>接口会保存当前表单提交的数据，并返回后端服务生成的<code>id</code>，并返回到前端，格式如下;</p>\n<pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"status\"</span><span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"msg\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"保存成功\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"data\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"id\"</span><span class=\"token operator\">:</span> <span class=\"token number\">1</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<p>这时 amis 将会把<code>data</code>数据与当前<code>form</code>组件的数据域进行<strong>merge</strong>，<code>form</code>组件中的<code>static-tpl</code>组件会根据更新后的数据域，显示<code>id</code>为<code>1</code>。</p>\n<blockquote>\n<p>具有类似特征的组件还有<code>Formula</code>等</p>\n</blockquote>\n<h2><a class=\"anchor\" name=\"%E6%9B%B4%E6%96%B0%E6%95%B0%E6%8D%AE%E9%93%BE\" href=\"#%E6%9B%B4%E6%96%B0%E6%95%B0%E6%8D%AE%E9%93%BE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>更新数据链</h2><p>通常顶层数据域数据更新，孩子中具备数据域的组件都会更新，如果不更新会拿不到最新的值。从功能来看这个更新代价其实是很大的，有性能损耗，比如如果我在顶层更新了个变量 <code>name</code>，所有的孩子都会重新刷新一遍。\n目前 amis 中，具备数据域的组件，默认会检测两层节点的数据是否发生变化（上层数据域和上上层数据域），来决定当前层的数据要不要更新。存在两个问题：</p>\n<ol>\n<li>当前组件也许并不关心上层数据是否变化，没必要进行这些刷新操作</li>\n<li>当前组件关系上上层的数据变化，但是在此拿不到最新的。（比如：放在 service 中的 crud，crud 中 filter 用了 service 的接口返回数据，但是拿不到最新的）</li>\n</ol>\n<p>amis 从 3.2.0 版本开始针对<a href=\"#%E5%85%B7%E5%A4%87%E6%95%B0%E6%8D%AE%E5%9F%9F%E7%9A%84%E7%BB%84%E4%BB%B6\">具备数据域的组件</a>新增了 <code>trackExpression</code> 属性，用来主动配置当前组件需要关心的上层数据。</p>\n<p>针对以上问题，则可以通过这样配置来解决</p>\n<ol>\n<li><code>trackExpression</code> 配置成 <code>&quot;none&quot;</code> 也就是说不追踪任何数据。</li>\n<li><code>trackExpression</code> 配置成 <code>&quot;${xxxVariable}&quot;</code> 这样 xxxVariable 变化了更新当前组件的数据链。</li>\n</ol>\n<p>关于 <code>trackExpression</code> 的语法，请查看表达式篇章，可以监听多个变量比如: <code>&quot;${xxx1},${xxx2}&quot;</code>，还可以写表单时如 <code>&quot;${ xxx ? xxx : yyy}&quot;</code>。</p>\n<p>amis 内部是通过运算这个表达式的结果来判断。所以表达式中千万不要用随机函数，或者用当前时间等，否则每次都会更新数据链。另外如果变量是数组，或者对象，会转成统一的字符串 <code>[object Array]</code> 或者 <code>[object Object]</code> 这个其实会影响检测的，所以建议转成 json 字符串如。 <code>${xxxObject | json}</code>。还有就是既然是监控上层数据，表达式中不要写当前层数据变量，是取不到的。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"data\": {\n    \"name\": \"amis\"\n  },\n  \"type\": \"page\",\n  \"body\": [\n    { \"label\": \"请修改输入框\", \"type\": \"input-text\", \"name\": \"name\"},\n    {\n      \"type\": \"switch\",\n      \"label\": \"同步更新\",\n      \"name\": \"syncSwitch\"\n    },\n    {\n      \"type\": \"crud\",\n      \"filter\": {\n        \"trackExpression\": \"${syncSwitch ? name : ''}\",\n        \"body\": [\n\n\n          \"my name is ${name}\"\n        ]\n      }\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"url-%E5%8F%82%E6%95%B0\" href=\"#url-%E5%8F%82%E6%95%B0\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>URL 参数</h2><p>url 中的参数会进入顶层数据域，比如下面的例子，可以点击<a href=\"./datascope-and-datachain?word=myquery#url-参数\">这里</a>看效果。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"body\": \"${word}\"\n}\n</script></div><div class=\"markdown-body\">\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本的数据展示",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%9A%84%E6%95%B0%E6%8D%AE%E5%B1%95%E7%A4%BA",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%9A%84%E6%95%B0%E6%8D%AE%E5%B1%95%E7%A4%BA",
          "level": 2
        },
        {
          "label": "添加初始化接口",
          "fragment": "%E6%B7%BB%E5%8A%A0%E5%88%9D%E5%A7%8B%E5%8C%96%E6%8E%A5%E5%8F%A3",
          "fullPath": "#%E6%B7%BB%E5%8A%A0%E5%88%9D%E5%A7%8B%E5%8C%96%E6%8E%A5%E5%8F%A3",
          "level": 2
        },
        {
          "label": "发生了什么?",
          "fragment": "%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88-",
          "fullPath": "#%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88-",
          "level": 2
        },
        {
          "label": "数据域",
          "fragment": "%E6%95%B0%E6%8D%AE%E5%9F%9F",
          "fullPath": "#%E6%95%B0%E6%8D%AE%E5%9F%9F",
          "level": 2
        },
        {
          "label": "数据链",
          "fragment": "%E6%95%B0%E6%8D%AE%E9%93%BE",
          "fullPath": "#%E6%95%B0%E6%8D%AE%E9%93%BE",
          "level": 2,
          "children": [
            {
              "label": "具备数据域的组件",
              "fragment": "%E5%85%B7%E5%A4%87%E6%95%B0%E6%8D%AE%E5%9F%9F%E7%9A%84%E7%BB%84%E4%BB%B6",
              "fullPath": "#%E5%85%B7%E5%A4%87%E6%95%B0%E6%8D%AE%E5%9F%9F%E7%9A%84%E7%BB%84%E4%BB%B6",
              "level": 3
            },
            {
              "label": "常见误解",
              "fragment": "%E5%B8%B8%E8%A7%81%E8%AF%AF%E8%A7%A3",
              "fullPath": "#%E5%B8%B8%E8%A7%81%E8%AF%AF%E8%A7%A3",
              "level": 3
            }
          ]
        },
        {
          "label": "初始化数据域",
          "fragment": "%E5%88%9D%E5%A7%8B%E5%8C%96%E6%95%B0%E6%8D%AE%E5%9F%9F",
          "fullPath": "#%E5%88%9D%E5%A7%8B%E5%8C%96%E6%95%B0%E6%8D%AE%E5%9F%9F",
          "level": 2,
          "children": [
            {
              "label": "1. 配置组件初始化接口",
              "fragment": "1-%E9%85%8D%E7%BD%AE%E7%BB%84%E4%BB%B6%E5%88%9D%E5%A7%8B%E5%8C%96%E6%8E%A5%E5%8F%A3",
              "fullPath": "#1-%E9%85%8D%E7%BD%AE%E7%BB%84%E4%BB%B6%E5%88%9D%E5%A7%8B%E5%8C%96%E6%8E%A5%E5%8F%A3",
              "level": 3
            },
            {
              "label": "2. 显式配置 data 属性值",
              "fragment": "2-%E6%98%BE%E5%BC%8F%E9%85%8D%E7%BD%AE-data-%E5%B1%9E%E6%80%A7%E5%80%BC",
              "fullPath": "#2-%E6%98%BE%E5%BC%8F%E9%85%8D%E7%BD%AE-data-%E5%B1%9E%E6%80%A7%E5%80%BC",
              "level": 3
            },
            {
              "label": "同时配置",
              "fragment": "%E5%90%8C%E6%97%B6%E9%85%8D%E7%BD%AE",
              "fullPath": "#%E5%90%8C%E6%97%B6%E9%85%8D%E7%BD%AE",
              "level": 3
            }
          ]
        },
        {
          "label": "更新数据域",
          "fragment": "%E6%9B%B4%E6%96%B0%E6%95%B0%E6%8D%AE%E5%9F%9F",
          "fullPath": "#%E6%9B%B4%E6%96%B0%E6%95%B0%E6%8D%AE%E5%9F%9F",
          "level": 2
        },
        {
          "label": "更新数据链",
          "fragment": "%E6%9B%B4%E6%96%B0%E6%95%B0%E6%8D%AE%E9%93%BE",
          "fullPath": "#%E6%9B%B4%E6%96%B0%E6%95%B0%E6%8D%AE%E9%93%BE",
          "level": 2
        },
        {
          "label": "URL 参数",
          "fragment": "url-%E5%8F%82%E6%95%B0",
          "fullPath": "#url-%E5%8F%82%E6%95%B0",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
