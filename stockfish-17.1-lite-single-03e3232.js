<!DOCTYPE html>
<!-- saved from url=(0086)https://app.unpkg.com/stockfish@17.1.0/files/src/stockfish-17.1-lite-single-03e3232.js -->
<html lang="en"><plasmo-csui><template shadowrootmode="open"><div id="plasmo-shadow-container" style="z-index: 2147483647; position: relative;"><div id="plasmo-overlay-0" class="plasmo-csui-container" style="display: flex; position: absolute; top: 0px; left: 0px;"></div></div></template></plasmo-csui><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description" content="The CDN for everything on npm"><link rel="icon" type="image/jpeg" href="https://app.unpkg.com/favicon.jpg"><link rel="stylesheet" href="./stockfish-17.1-lite-single-03e3232_files/styles-D6XP7YEC.css"><link rel="stylesheet" href="./stockfish-17.1-lite-single-03e3232_files/code-light-B2LHUSJR.css"><script type="importmap">{"imports":{"preact":"https://unpkg.com/preact@10.25.4/dist/preact.module.js","preact/hooks":"https://unpkg.com/preact@10.25.4/hooks/dist/hooks.module.js","preact/jsx-runtime":"https://unpkg.com/preact@10.25.4/jsx-runtime/dist/jsxRuntime.module.js"}}</script><script type="module" src="./stockfish-17.1-lite-single-03e3232_files/scripts-5LWG6LQM.js.download" defer=""></script><title>UNPKG</title><script async="" src="./stockfish-17.1-lite-single-03e3232_files/js"></script><script>window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-140352188-1');</script><script id="__ud_uninstall_watcher" type="text/javascript" src="blob:https://app.unpkg.com/e5c7774f-c8e9-4459-9f68-bcdbb9066920"></script><link rel="stylesheet" href="chrome-extension://bojobppfploabceghnmlahpoonbcbacn/app/content-style.css"></head><body class="ud-body-normal"><header class="border-b border-slate-300 bg-slate-100 text-slate-950"><div class="p-4 mx-auto flex justify-between items-center lg:max-w-screen-xl"><h1 class="text-2xl font-bold inline-block"><a href="https://unpkg.com/">UNPKG</a></h1><span class="inline-block h-full"><a href="https://github.com/unpkg"><svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"></path></svg></a></span></div></header><main class="px-4 pb-24 mx-auto lg:max-w-screen-xl lg:pb-44"><header class="pt-6 pb-4 lg:pt-16"><div class="mb-6 flex justify-between items-center"><h1 class="text-black text-3xl leading-tight font-semibold">stockfish</h1><div class="text-right w-48"><span>Version: </span><span><select name="version" class="w-28 p-1 border border-slate-300 bg-slate-100 text-sm"><optgroup label="Tags"><option selected="" value="17.1.0">latest (17.1.0)</option></optgroup><optgroup label="Versions"><option selected="" value="17.1.0">17.1.0</option><option value="16.0.0">16.0.0</option><option value="15.0.0">15.0.0</option><option value="14.1.0">14.1.0</option><option value="14.0.0">14.0.0</option><option value="12.0.0">12.0.0</option><option value="11.0.0">11.0.0</option><option value="10.0.2">10.0.2</option><option value="10.0.1">10.0.1</option><option value="10.0.0">10.0.0</option><option value="8.0.0">8.0.0</option><option value="6.0.5">6.0.5</option><option value="6.0.4">6.0.4</option><option value="6.0.3">6.0.3</option><option value="6.0.1">6.0.1</option><option value="6.0.0">6.0.0</option></optgroup></select></span></div></div><div class="mt-2"><p class="mb-3 leading-tight"><span>The Stockfish chess engine in Web Assembly (WASM)</span></p><div class="lg:hidden"><p class="mt-1 text-sm leading-4"><a href="https://github.com/nmrugg/stockfish.js#readme" title="Visit the stockfish website" class="inline-flex items-center hover:text-slate-950 hover:underline"><svg aria-hidden="true" fill="none" viewBox="0 0 24 24" class="w-6 h-6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"></path></svg><span class="ml-1">github.com/nmrugg/stockfish.js</span></a></p><p class="mt-1 text-sm leading-4"><a href="https://github.com/nmrugg/stockfish.js" title="View the stockfish repository on GitHub" class="inline-flex items-center hover:text-slate-950 hover:underline"><svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"></path></svg><span class="ml-1">nmrugg/stockfish.js</span></a></p></div></div></header><nav class="py-2"><span><a href="https://app.unpkg.com/stockfish@17.1.0" class="text-blue-600 hover:underline">stockfish</a></span><span> / </span><span><a href="https://app.unpkg.com/stockfish@17.1.0/files/src" class="text-blue-600 hover:underline">src</a></span><span> / </span><span>stockfish-17.1-lite-single-03e3232.js</span></nav><div class="p-3 border border-slate-300 bg-slate-100 text-sm flex justify-between select-none"><div class="w-64"><span><span>11 lines </span><span>• </span></span><span>20.7 kB</span></div><div class="hidden flex-grow sm:block text-center">JavaScript</div><div class="w-64 hidden sm:block text-right"><a href="https://unpkg.com/stockfish@17.1.0/src/stockfish-17.1-lite-single-03e3232.js" class="py-1 px-2 border border-slate-300 bg-slate-100 hover:bg-slate-200 rounded-sm">View Raw</a></div></div><div><div class="flex relative bg-white font-mono text-sm leading-6"><div class="py-4 border-b border-x border-slate-300 bg-slate-100 text-right select-none"><div><div class="relative"><a id="L1" href="https://app.unpkg.com/stockfish@17.1.0/files/src/stockfish-17.1-lite-single-03e3232.js#L1" class="inline-block w-full pl-4 sm:pl-6 pr-2 text-slate-600 hover:text-slate-950 outline-none">1</a></div></div><div><div class="relative"><a id="L2" href="https://app.unpkg.com/stockfish@17.1.0/files/src/stockfish-17.1-lite-single-03e3232.js#L2" class="inline-block w-full pl-4 sm:pl-6 pr-2 text-slate-600 hover:text-slate-950 outline-none">2</a></div></div><div><div class="relative"><a id="L3" href="https://app.unpkg.com/stockfish@17.1.0/files/src/stockfish-17.1-lite-single-03e3232.js#L3" class="inline-block w-full pl-4 sm:pl-6 pr-2 text-slate-600 hover:text-slate-950 outline-none">3</a></div></div><div><div class="relative"><a id="L4" href="https://app.unpkg.com/stockfish@17.1.0/files/src/stockfish-17.1-lite-single-03e3232.js#L4" class="inline-block w-full pl-4 sm:pl-6 pr-2 text-slate-600 hover:text-slate-950 outline-none">4</a></div></div><div><div class="relative"><a id="L5" href="https://app.unpkg.com/stockfish@17.1.0/files/src/stockfish-17.1-lite-single-03e3232.js#L5" class="inline-block w-full pl-4 sm:pl-6 pr-2 text-slate-600 hover:text-slate-950 outline-none">5</a></div></div><div><div class="relative"><a id="L6" href="https://app.unpkg.com/stockfish@17.1.0/files/src/stockfish-17.1-lite-single-03e3232.js#L6" class="inline-block w-full pl-4 sm:pl-6 pr-2 text-slate-600 hover:text-slate-950 outline-none">6</a></div></div><div><div class="relative"><a id="L7" href="https://app.unpkg.com/stockfish@17.1.0/files/src/stockfish-17.1-lite-single-03e3232.js#L7" class="inline-block w-full pl-4 sm:pl-6 pr-2 text-slate-600 hover:text-slate-950 outline-none">7</a></div></div><div><div class="relative"><a id="L8" href="https://app.unpkg.com/stockfish@17.1.0/files/src/stockfish-17.1-lite-single-03e3232.js#L8" class="inline-block w-full pl-4 sm:pl-6 pr-2 text-slate-600 hover:text-slate-950 outline-none">8</a></div></div><div><div class="relative"><a id="L9" href="https://app.unpkg.com/stockfish@17.1.0/files/src/stockfish-17.1-lite-single-03e3232.js#L9" class="inline-block w-full pl-4 sm:pl-6 pr-2 text-slate-600 hover:text-slate-950 outline-none">9</a></div></div><div><div class="relative"><a id="L10" href="https://app.unpkg.com/stockfish@17.1.0/files/src/stockfish-17.1-lite-single-03e3232.js#L10" class="inline-block w-full pl-4 sm:pl-6 pr-2 text-slate-600 hover:text-slate-950 outline-none">10</a></div></div><div><div class="relative"><a id="L11" href="https://app.unpkg.com/stockfish@17.1.0/files/src/stockfish-17.1-lite-single-03e3232.js#L11" class="inline-block w-full pl-4 sm:pl-6 pr-2 text-slate-600 hover:text-slate-950 outline-none">11</a></div></div></div><div class="py-4 pl-4 pr-6 relative border-b border-r border-slate-300 flex-grow whitespace-pre overflow-x-auto" style="tab-size:2;"><span class="hljs-comment">/*!
 * Stockfish.js 17.1 (c) 2025, Chess.com, LLC
 * https://github.com/nmrugg/stockfish.js
 * License: GPLv3
 *
 * Based on Stockfish (c) T. Romstad, M. Costalba, J. Kiiski, G. Linscott and other contributors.
 * https://github.com/official-stockfish/Stockfish
 *
 * Nets by Linmiao Xu (linrock)
 * https://tests.stockfishchess.org/nns?network_name=nn-9067e33176e
 */</span>!<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">var</span> a,u,s,e,r,o,n;<span class="hljs-keyword">function</span> <span class="hljs-title function_">t</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">function</span> <span class="hljs-title function_">e</span>(<span class="hljs-params">e</span>){e=e||{},(l=l||(<span class="hljs-keyword">void</span> <span class="hljs-number">0</span>!==e?<span class="hljs-attr">e</span>:{})).<span class="hljs-property">ready</span>=<span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-keyword">function</span>(<span class="hljs-params">e,n</span>){T=e,i=n}),<span class="hljs-string">"undefined"</span>!=<span class="hljs-keyword">typeof</span> <span class="hljs-variable language_">global</span>&amp;&amp;<span class="hljs-string">"[object process]"</span>===<span class="hljs-title class_">Object</span>.<span class="hljs-property"><span class="hljs-keyword">prototype</span></span>.<span class="hljs-property">toString</span>.<span class="hljs-title function_">call</span>(<span class="hljs-variable language_">global</span>.<span class="hljs-property">process</span>)&amp;&amp;<span class="hljs-string">"undefined"</span>!=<span class="hljs-keyword">typeof</span> fetch&amp;&amp;(<span class="hljs-string">"undefined"</span>==<span class="hljs-keyword">typeof</span> <span class="hljs-title class_">XMLHttpRequest</span>&amp;&amp;(<span class="hljs-variable language_">global</span>.<span class="hljs-property">XMLHttpRequest</span>=<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">var</span> t,r={<span class="hljs-attr">open</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e,n</span>){t=n},<span class="hljs-attr">send</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-built_in">require</span>(<span class="hljs-string">"fs"</span>).<span class="hljs-title function_">readFile</span>(t,<span class="hljs-keyword">function</span>(<span class="hljs-params">e,n</span>){r.<span class="hljs-property">readyState</span>=<span class="hljs-number">4</span>,e?(<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">error</span>(e),r.<span class="hljs-property">status</span>=<span class="hljs-number">404</span>,r.<span class="hljs-title function_">onerror</span>(e)):(r.<span class="hljs-property">status</span>=<span class="hljs-number">200</span>,r.<span class="hljs-property">response</span>=n,r.<span class="hljs-title function_">onreadystatechange</span>(),r.<span class="hljs-title function_">onload</span>())})}};<span class="hljs-keyword">return</span> r}),fetch=<span class="hljs-literal">null</span>),l.<span class="hljs-property">print</span>=<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){l.<span class="hljs-property">listener</span>?l.<span class="hljs-title function_">listener</span>(e):<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(e)},l.<span class="hljs-property">printErr</span>=<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){l.<span class="hljs-property">listener</span>?l.<span class="hljs-title function_">listener</span>(e):<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">error</span>(e)},l.<span class="hljs-property">terminate</span>=<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-string">"undefined"</span>!=<span class="hljs-keyword">typeof</span> <span class="hljs-title class_">PThread</span>&amp;&amp;<span class="hljs-title class_">PThread</span>.<span class="hljs-title function_">Z</span>()};<span class="hljs-keyword">var</span> l,T,i,n,t,U,r,H,a,o=<span class="hljs-title class_">Object</span>.<span class="hljs-title function_">assign</span>({},l),u=[],s=<span class="hljs-string">"./this.program"</span>,c=<span class="hljs-function">(<span class="hljs-params">e,n</span>)=&gt;</span>{<span class="hljs-keyword">throw</span> n},k=<span class="hljs-string">"object"</span>==<span class="hljs-keyword">typeof</span> <span class="hljs-variable language_">window</span>,f=<span class="hljs-string">"function"</span>==<span class="hljs-keyword">typeof</span> importScripts,L=<span class="hljs-string">"object"</span>==<span class="hljs-keyword">typeof</span> process&amp;&amp;<span class="hljs-string">"object"</span>==<span class="hljs-keyword">typeof</span> process.<span class="hljs-property">versions</span>&amp;&amp;<span class="hljs-string">"string"</span>==<span class="hljs-keyword">typeof</span> process.<span class="hljs-property">versions</span>.<span class="hljs-property">node</span>,p=<span class="hljs-string">""</span>,q=(L?(p=f?<span class="hljs-built_in">require</span>(<span class="hljs-string">"path"</span>).<span class="hljs-title function_">dirname</span>(p)+<span class="hljs-string">"/"</span>:__dirname+<span class="hljs-string">"/"</span>,H=<span class="hljs-function">()=&gt;</span>{r||(U=<span class="hljs-built_in">require</span>(<span class="hljs-string">"fs"</span>),r=<span class="hljs-built_in">require</span>(<span class="hljs-string">"path"</span>))},n=<span class="hljs-keyword">function</span>(<span class="hljs-params">e,n</span>){<span class="hljs-keyword">return</span> <span class="hljs-title function_">H</span>(),e=r.<span class="hljs-title function_">normalize</span>(e),U.<span class="hljs-title function_">readFileSync</span>(e,n?<span class="hljs-keyword">void</span> <span class="hljs-number">0</span>:<span class="hljs-string">"utf8"</span>)},t=<span class="hljs-function"><span class="hljs-params">e</span>=&gt;</span>e=(e=<span class="hljs-title function_">n</span>(e,!<span class="hljs-number">0</span>)).<span class="hljs-property">buffer</span>?<span class="hljs-attr">e</span>:<span class="hljs-keyword">new</span> <span class="hljs-title class_">Uint8Array</span>(e),<span class="hljs-number">1</span>&lt;process.<span class="hljs-property">argv</span>.<span class="hljs-property">length</span>&amp;&amp;(s=process.<span class="hljs-property">argv</span>[<span class="hljs-number">1</span>].<span class="hljs-title function_">replace</span>(<span class="hljs-regexp">/\\/g</span>,<span class="hljs-string">"/"</span>)),u=process.<span class="hljs-property">argv</span>.<span class="hljs-title function_">slice</span>(<span class="hljs-number">2</span>),process.<span class="hljs-title function_">on</span>(<span class="hljs-string">"uncaughtException"</span>,<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">if</span>(!(e <span class="hljs-keyword">instanceof</span> j))<span class="hljs-keyword">throw</span> e}),process.<span class="hljs-title function_">on</span>(<span class="hljs-string">"unhandledRejection"</span>,<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">throw</span> e}),c=<span class="hljs-function">(<span class="hljs-params">e,n</span>)=&gt;</span>{<span class="hljs-keyword">if</span>(d||<span class="hljs-number">0</span>&lt;_)<span class="hljs-keyword">throw</span> process.<span class="hljs-property">exitCode</span>=e,n;n <span class="hljs-keyword">instanceof</span> j||<span class="hljs-title function_">m</span>(<span class="hljs-string">"exiting due to exception: "</span>+n),process.<span class="hljs-title function_">exit</span>(e)},l.<span class="hljs-property">inspect</span>=<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">return</span><span class="hljs-string">"[Emscripten Module object]"</span>}):(k||f)&amp;&amp;(f?p=self.<span class="hljs-property">location</span>.<span class="hljs-property">href</span>:<span class="hljs-string">"undefined"</span>!=<span class="hljs-keyword">typeof</span> <span class="hljs-variable language_">document</span>&amp;&amp;<span class="hljs-variable language_">document</span>.<span class="hljs-property">currentScript</span>&amp;&amp;(p=<span class="hljs-variable language_">document</span>.<span class="hljs-property">currentScript</span>.<span class="hljs-property">src</span>),p=<span class="hljs-number">0</span>!==(p=<span class="hljs-title class_">Te</span>?<span class="hljs-title class_">Te</span>:p).<span class="hljs-title function_">indexOf</span>(<span class="hljs-string">"blob:"</span>)?p.<span class="hljs-title function_">substr</span>(<span class="hljs-number">0</span>,p.<span class="hljs-title function_">replace</span>(<span class="hljs-regexp">/[?#].*/</span>,<span class="hljs-string">""</span>).<span class="hljs-title function_">lastIndexOf</span>(<span class="hljs-string">"/"</span>)+<span class="hljs-number">1</span>):<span class="hljs-string">""</span>,n=<span class="hljs-function"><span class="hljs-params">e</span>=&gt;</span>{<span class="hljs-keyword">var</span> n=<span class="hljs-keyword">new</span> <span class="hljs-title class_">XMLHttpRequest</span>;<span class="hljs-keyword">return</span> n.<span class="hljs-title function_">open</span>(<span class="hljs-string">"GET"</span>,e,!<span class="hljs-number">1</span>),n.<span class="hljs-title function_">send</span>(<span class="hljs-literal">null</span>),n.<span class="hljs-property">responseText</span>},f)&amp;&amp;(t=<span class="hljs-function"><span class="hljs-params">e</span>=&gt;</span>{<span class="hljs-keyword">var</span> n=<span class="hljs-keyword">new</span> <span class="hljs-title class_">XMLHttpRequest</span>;<span class="hljs-keyword">return</span> n.<span class="hljs-title function_">open</span>(<span class="hljs-string">"GET"</span>,e,!<span class="hljs-number">1</span>),n.<span class="hljs-property">responseType</span>=<span class="hljs-string">"arraybuffer"</span>,n.<span class="hljs-title function_">send</span>(<span class="hljs-literal">null</span>),<span class="hljs-keyword">new</span> <span class="hljs-title class_">Uint8Array</span>(n.<span class="hljs-property">response</span>)}),l.<span class="hljs-property">print</span>||<span class="hljs-variable language_">console</span>.<span class="hljs-property">log</span>.<span class="hljs-title function_">bind</span>(<span class="hljs-variable language_">console</span>)),m=l.<span class="hljs-property">printErr</span>||<span class="hljs-variable language_">console</span>.<span class="hljs-property">warn</span>.<span class="hljs-title function_">bind</span>(<span class="hljs-variable language_">console</span>),d=(<span class="hljs-title class_">Object</span>.<span class="hljs-title function_">assign</span>(l,o),l.<span class="hljs-property">arguments</span>&amp;&amp;(u=l.<span class="hljs-property">arguments</span>),l.<span class="hljs-property">thisProgram</span>&amp;&amp;(s=l.<span class="hljs-property">thisProgram</span>),l.<span class="hljs-property">quit</span>&amp;&amp;(c=l.<span class="hljs-property">quit</span>),l.<span class="hljs-property">wasmBinary</span>&amp;&amp;(a=l.<span class="hljs-property">wasmBinary</span>),l.<span class="hljs-property">noExitRuntime</span>||!<span class="hljs-number">0</span>);<span class="hljs-string">"object"</span>!=<span class="hljs-keyword">typeof</span> <span class="hljs-title class_">WebAssembly</span>&amp;&amp;<span class="hljs-title function_">A</span>(<span class="hljs-string">"no native wasm support detected"</span>);<span class="hljs-keyword">var</span> W,B,h,y,g,N,v=!<span class="hljs-number">1</span>,K=<span class="hljs-string">"undefined"</span>!=<span class="hljs-keyword">typeof</span> <span class="hljs-title class_">TextDecoder</span>?<span class="hljs-keyword">new</span> <span class="hljs-title class_">TextDecoder</span>(<span class="hljs-string">"utf8"</span>):<span class="hljs-keyword">void</span> <span class="hljs-number">0</span>;<span class="hljs-keyword">function</span> <span class="hljs-title function_">X</span>(<span class="hljs-params">e,n,t</span>){<span class="hljs-keyword">var</span> r=n+t;<span class="hljs-keyword">for</span>(t=n;e[t]&amp;&amp;!(r&lt;=t);)++t;<span class="hljs-keyword">if</span>(<span class="hljs-number">16</span>&lt;t-n&amp;&amp;e.<span class="hljs-property">subarray</span>&amp;&amp;K)<span class="hljs-keyword">return</span> K.<span class="hljs-title function_">decode</span>(e.<span class="hljs-title function_">subarray</span>(n,t));<span class="hljs-keyword">for</span>(r=<span class="hljs-string">""</span>;n&lt;t;){<span class="hljs-keyword">var</span> o,i,a=e[n++];<span class="hljs-number">128</span>&amp;a?(o=<span class="hljs-number">63</span>&amp;e[n++],<span class="hljs-number">192</span>==(<span class="hljs-number">224</span>&amp;a)?r+=<span class="hljs-title class_">String</span>.<span class="hljs-title function_">fromCharCode</span>((<span class="hljs-number">31</span>&amp;a)&lt;&lt;<span class="hljs-number">6</span>|o):(i=<span class="hljs-number">63</span>&amp;e[n++],(a=<span class="hljs-number">224</span>==(<span class="hljs-number">240</span>&amp;a)?(<span class="hljs-number">15</span>&amp;a)&lt;&lt;<span class="hljs-number">12</span>|o&lt;&lt;<span class="hljs-number">6</span>|<span class="hljs-attr">i</span>:(<span class="hljs-number">7</span>&amp;a)&lt;&lt;<span class="hljs-number">18</span>|o&lt;&lt;<span class="hljs-number">12</span>|i&lt;&lt;<span class="hljs-number">6</span>|<span class="hljs-number">63</span>&amp;e[n++])&lt;<span class="hljs-number">65536</span>?r+=<span class="hljs-title class_">String</span>.<span class="hljs-title function_">fromCharCode</span>(a):(a-=<span class="hljs-number">65536</span>,r+=<span class="hljs-title class_">String</span>.<span class="hljs-title function_">fromCharCode</span>(<span class="hljs-number">55296</span>|a&gt;&gt;<span class="hljs-number">10</span>,<span class="hljs-number">56320</span>|<span class="hljs-number">1023</span>&amp;a)))):r+=<span class="hljs-title class_">String</span>.<span class="hljs-title function_">fromCharCode</span>(a)}<span class="hljs-keyword">return</span> r}<span class="hljs-keyword">function</span> <span class="hljs-title function_">z</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">return</span> e?<span class="hljs-title function_">X</span>(y,e,<span class="hljs-keyword">void</span> <span class="hljs-number">0</span>):<span class="hljs-string">""</span>}<span class="hljs-keyword">function</span> <span class="hljs-title function_">G</span>(<span class="hljs-params">e,n,t,r</span>){<span class="hljs-keyword">if</span>(<span class="hljs-number">0</span>&lt;r){r=t+r-<span class="hljs-number">1</span>;<span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> o=<span class="hljs-number">0</span>;o&lt;e.<span class="hljs-property">length</span>;++o){<span class="hljs-keyword">var</span> i=e.<span class="hljs-title function_">charCodeAt</span>(o);<span class="hljs-keyword">if</span>((i=<span class="hljs-number">55296</span>&lt;=i&amp;&amp;i&lt;=<span class="hljs-number">57343</span>?<span class="hljs-number">65536</span>+((<span class="hljs-number">1023</span>&amp;i)&lt;&lt;<span class="hljs-number">10</span>)|<span class="hljs-number">1023</span>&amp;e.<span class="hljs-title function_">charCodeAt</span>(++o):i)&lt;=<span class="hljs-number">127</span>){<span class="hljs-keyword">if</span>(r&lt;=t)<span class="hljs-keyword">break</span>;n[t++]=i}<span class="hljs-keyword">else</span>{<span class="hljs-keyword">if</span>(i&lt;=<span class="hljs-number">2047</span>){<span class="hljs-keyword">if</span>(r&lt;=t+<span class="hljs-number">1</span>)<span class="hljs-keyword">break</span>;n[t++]=<span class="hljs-number">192</span>|i&gt;&gt;<span class="hljs-number">6</span>}<span class="hljs-keyword">else</span>{<span class="hljs-keyword">if</span>(i&lt;=<span class="hljs-number">65535</span>){<span class="hljs-keyword">if</span>(r&lt;=t+<span class="hljs-number">2</span>)<span class="hljs-keyword">break</span>;n[t++]=<span class="hljs-number">224</span>|i&gt;&gt;<span class="hljs-number">12</span>}<span class="hljs-keyword">else</span>{<span class="hljs-keyword">if</span>(r&lt;=t+<span class="hljs-number">3</span>)<span class="hljs-keyword">break</span>;n[t++]=<span class="hljs-number">240</span>|i&gt;&gt;<span class="hljs-number">18</span>,n[t++]=<span class="hljs-number">128</span>|i&gt;&gt;<span class="hljs-number">12</span>&amp;<span class="hljs-number">63</span>}n[t++]=<span class="hljs-number">128</span>|i&gt;&gt;<span class="hljs-number">6</span>&amp;<span class="hljs-number">63</span>}n[t++]=<span class="hljs-number">128</span>|<span class="hljs-number">63</span>&amp;i}}n[t]=<span class="hljs-number">0</span>}}<span class="hljs-keyword">function</span> <span class="hljs-title function_">V</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> n=<span class="hljs-number">0</span>,t=<span class="hljs-number">0</span>;t&lt;e.<span class="hljs-property">length</span>;++t){<span class="hljs-keyword">var</span> r=e.<span class="hljs-title function_">charCodeAt</span>(t);(r=<span class="hljs-number">55296</span>&lt;=r&amp;&amp;r&lt;=<span class="hljs-number">57343</span>?<span class="hljs-number">65536</span>+((<span class="hljs-number">1023</span>&amp;r)&lt;&lt;<span class="hljs-number">10</span>)|<span class="hljs-number">1023</span>&amp;e.<span class="hljs-title function_">charCodeAt</span>(++t):r)&lt;=<span class="hljs-number">127</span>?++<span class="hljs-attr">n</span>:n=r&lt;=<span class="hljs-number">2047</span>?n+<span class="hljs-number">2</span>:r&lt;=<span class="hljs-number">65535</span>?n+<span class="hljs-number">3</span>:n+<span class="hljs-number">4</span>}<span class="hljs-keyword">return</span> n}<span class="hljs-keyword">function</span> <span class="hljs-title function_">J</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">var</span> n=<span class="hljs-title function_">V</span>(e)+<span class="hljs-number">1</span>,t=<span class="hljs-title function_">Y</span>(n);<span class="hljs-keyword">return</span> <span class="hljs-title function_">G</span>(e,h,t,n),t}<span class="hljs-keyword">function</span> <span class="hljs-title function_">Z</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">var</span> e=W.<span class="hljs-property">buffer</span>;B=e,l.<span class="hljs-property">HEAP8</span>=h=<span class="hljs-keyword">new</span> <span class="hljs-title class_">Int8Array</span>(e),l.<span class="hljs-property">HEAP16</span>=<span class="hljs-keyword">new</span> <span class="hljs-title class_">Int16Array</span>(e),l.<span class="hljs-property">HEAP32</span>=g=<span class="hljs-keyword">new</span> <span class="hljs-title class_">Int32Array</span>(e),l.<span class="hljs-property">HEAPU8</span>=y=<span class="hljs-keyword">new</span> <span class="hljs-title class_">Uint8Array</span>(e),l.<span class="hljs-property">HEAPU16</span>=<span class="hljs-keyword">new</span> <span class="hljs-title class_">Uint16Array</span>(e),l.<span class="hljs-property">HEAPU32</span>=<span class="hljs-keyword">new</span> <span class="hljs-title class_">Uint32Array</span>(e),l.<span class="hljs-property">HEAPF32</span>=<span class="hljs-keyword">new</span> <span class="hljs-title class_">Float32Array</span>(e),l.<span class="hljs-property">HEAPF64</span>=N=<span class="hljs-keyword">new</span> <span class="hljs-title class_">Float64Array</span>(e)}<span class="hljs-keyword">var</span> w,$=[],Q=[],ee=[],ne=[],te=!<span class="hljs-number">1</span>,_=<span class="hljs-number">0</span>,b=<span class="hljs-number">0</span>,re=<span class="hljs-literal">null</span>,S=<span class="hljs-literal">null</span>;<span class="hljs-keyword">function</span> <span class="hljs-title function_">A</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">throw</span> l.<span class="hljs-property">onAbort</span>&amp;&amp;l.<span class="hljs-title function_">onAbort</span>(e),<span class="hljs-title function_">m</span>(e=<span class="hljs-string">"Aborted("</span>+e+<span class="hljs-string">")"</span>),v=!<span class="hljs-number">0</span>,e=<span class="hljs-keyword">new</span> <span class="hljs-title class_">WebAssembly</span>.<span class="hljs-title class_">RuntimeError</span>(e+<span class="hljs-string">". Build with -s ASSERTIONS=1 for more info."</span>),<span class="hljs-title function_">i</span>(e),e}<span class="hljs-keyword">function</span> <span class="hljs-title function_">oe</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">return</span> w.<span class="hljs-title function_">startsWith</span>(<span class="hljs-string">"data:application/octet-stream;base64,"</span>)}<span class="hljs-keyword">function</span> <span class="hljs-title function_">ie</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">var</span> e=w;<span class="hljs-keyword">try</span>{<span class="hljs-keyword">if</span>(e==w&amp;&amp;a)<span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Uint8Array</span>(a);<span class="hljs-keyword">if</span>(t)<span class="hljs-keyword">return</span> <span class="hljs-title function_">t</span>(e);<span class="hljs-keyword">throw</span><span class="hljs-string">"both async and sync fetching of the wasm failed"</span>}<span class="hljs-keyword">catch</span>(e){<span class="hljs-title function_">A</span>(e)}}l.<span class="hljs-property">preloadedImages</span>={},l.<span class="hljs-property">preloadedAudios</span>={},w=<span class="hljs-string">"stockfish.wasm"</span>,<span class="hljs-title function_">oe</span>()||(o=w,w=l.<span class="hljs-property">locateFile</span>?l.<span class="hljs-title function_">locateFile</span>(o,p):p+o);<span class="hljs-keyword">var</span> ae={<span class="hljs-number">6672168</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">try</span>{l.<span class="hljs-title function_">onDoneSearching</span>()}<span class="hljs-keyword">catch</span>(e){}}};<span class="hljs-keyword">function</span> <span class="hljs-title function_">D</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">for</span>(;<span class="hljs-number">0</span>&lt;e.<span class="hljs-property">length</span>;){<span class="hljs-keyword">var</span> n,t=e.<span class="hljs-title function_">shift</span>();<span class="hljs-string">"function"</span>==<span class="hljs-keyword">typeof</span> t?<span class="hljs-title function_">t</span>(l):<span class="hljs-string">"number"</span>==<span class="hljs-title function_">typeof</span>(n=t.<span class="hljs-property">S</span>)?<span class="hljs-keyword">void</span> <span class="hljs-number">0</span>===t.<span class="hljs-property">P</span>?<span class="hljs-title class_">Ie</span>.<span class="hljs-title function_">call</span>(<span class="hljs-literal">null</span>,n):<span class="hljs-title class_">Ee</span>.<span class="hljs-title function_">apply</span>(<span class="hljs-literal">null</span>,[n,t.<span class="hljs-property">P</span>]):<span class="hljs-title function_">n</span>(<span class="hljs-keyword">void</span> <span class="hljs-number">0</span>===t.<span class="hljs-property">P</span>?<span class="hljs-attr">null</span>:t.<span class="hljs-property">P</span>)}}<span class="hljs-keyword">function</span> <span class="hljs-title function_">ue</span>(<span class="hljs-params">e</span>){e <span class="hljs-keyword">instanceof</span> j||<span class="hljs-string">"unwind"</span>==e||<span class="hljs-title function_">c</span>(<span class="hljs-number">1</span>,e)}<span class="hljs-keyword">var</span> se=[<span class="hljs-literal">null</span>,[],[]],ce={},fe=L?<span class="hljs-function">()=&gt;</span>{<span class="hljs-keyword">var</span> e=process.<span class="hljs-title function_">hrtime</span>();<span class="hljs-keyword">return</span> <span class="hljs-number">1e3</span>*e[<span class="hljs-number">0</span>]+e[<span class="hljs-number">1</span>]/<span class="hljs-number">1e6</span>}:<span class="hljs-function">()=&gt;</span>performance.<span class="hljs-title function_">now</span>(),le=[];<span class="hljs-keyword">function</span> <span class="hljs-title function_">pe</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">if</span>(!te&amp;&amp;!v)<span class="hljs-keyword">try</span>{<span class="hljs-title function_">e</span>()}<span class="hljs-keyword">catch</span>(e){<span class="hljs-title function_">ue</span>(e)}}<span class="hljs-keyword">var</span> me,de={};<span class="hljs-keyword">function</span> <span class="hljs-title function_">he</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">if</span>(!me){<span class="hljs-keyword">var</span> e,n={<span class="hljs-attr">USER</span>:<span class="hljs-string">"web_user"</span>,<span class="hljs-attr">LOGNAME</span>:<span class="hljs-string">"web_user"</span>,<span class="hljs-attr">PATH</span>:<span class="hljs-string">"/"</span>,<span class="hljs-attr">PWD</span>:<span class="hljs-string">"/"</span>,<span class="hljs-attr">HOME</span>:<span class="hljs-string">"/home/web_user"</span>,<span class="hljs-attr">LANG</span>:(<span class="hljs-string">"object"</span>==<span class="hljs-keyword">typeof</span> navigator&amp;&amp;navigator.<span class="hljs-property">languages</span>&amp;&amp;navigator.<span class="hljs-property">languages</span>[<span class="hljs-number">0</span>]||<span class="hljs-string">"C"</span>).<span class="hljs-title function_">replace</span>(<span class="hljs-string">"-"</span>,<span class="hljs-string">"_"</span>)+<span class="hljs-string">".UTF-8"</span>,<span class="hljs-attr">_</span>:s||<span class="hljs-string">"./this.program"</span>};<span class="hljs-keyword">for</span>(e <span class="hljs-keyword">in</span> de)<span class="hljs-keyword">void</span> <span class="hljs-number">0</span>===de[e]?<span class="hljs-keyword">delete</span> n[e]:n[e]=de[e];<span class="hljs-keyword">var</span> t=[];<span class="hljs-keyword">for</span>(e <span class="hljs-keyword">in</span> n)t.<span class="hljs-title function_">push</span>(e+<span class="hljs-string">"="</span>+n[e]);me=t}<span class="hljs-keyword">return</span> me}<span class="hljs-keyword">function</span> <span class="hljs-title function_">C</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">return</span> <span class="hljs-number">0</span>==e%<span class="hljs-number">4</span>&amp;&amp;(<span class="hljs-number">0</span>!=e%<span class="hljs-number">100</span>||<span class="hljs-number">0</span>==e%<span class="hljs-number">400</span>)}<span class="hljs-keyword">function</span> <span class="hljs-title function_">ye</span>(<span class="hljs-params">e,n</span>){<span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> t=<span class="hljs-number">0</span>,r=<span class="hljs-number">0</span>;r&lt;=n;t+=e[r++]);<span class="hljs-keyword">return</span> t}<span class="hljs-keyword">var</span> M=[<span class="hljs-number">31</span>,<span class="hljs-number">29</span>,<span class="hljs-number">31</span>,<span class="hljs-number">30</span>,<span class="hljs-number">31</span>,<span class="hljs-number">30</span>,<span class="hljs-number">31</span>,<span class="hljs-number">31</span>,<span class="hljs-number">30</span>,<span class="hljs-number">31</span>,<span class="hljs-number">30</span>,<span class="hljs-number">31</span>],R=[<span class="hljs-number">31</span>,<span class="hljs-number">28</span>,<span class="hljs-number">31</span>,<span class="hljs-number">30</span>,<span class="hljs-number">31</span>,<span class="hljs-number">30</span>,<span class="hljs-number">31</span>,<span class="hljs-number">31</span>,<span class="hljs-number">30</span>,<span class="hljs-number">31</span>,<span class="hljs-number">30</span>,<span class="hljs-number">31</span>];<span class="hljs-keyword">function</span> <span class="hljs-title function_">x</span>(<span class="hljs-params">e,n</span>){<span class="hljs-keyword">for</span>(e=<span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(e.<span class="hljs-title function_">getTime</span>());<span class="hljs-number">0</span>&lt;n;){<span class="hljs-keyword">var</span> t=e.<span class="hljs-title function_">getMonth</span>(),r=(<span class="hljs-title function_">C</span>(e.<span class="hljs-title function_">getFullYear</span>())?<span class="hljs-attr">M</span>:R)[t];<span class="hljs-keyword">if</span>(!(n&gt;r-e.<span class="hljs-title function_">getDate</span>())){e.<span class="hljs-title function_">setDate</span>(e.<span class="hljs-title function_">getDate</span>()+n);<span class="hljs-keyword">break</span>}n-=r-e.<span class="hljs-title function_">getDate</span>()+<span class="hljs-number">1</span>,e.<span class="hljs-title function_">setDate</span>(<span class="hljs-number">1</span>),t&lt;<span class="hljs-number">11</span>?e.<span class="hljs-title function_">setMonth</span>(t+<span class="hljs-number">1</span>):(e.<span class="hljs-title function_">setMonth</span>(<span class="hljs-number">0</span>),e.<span class="hljs-title function_">setFullYear</span>(e.<span class="hljs-title function_">getFullYear</span>()+<span class="hljs-number">1</span>))}<span class="hljs-keyword">return</span> e}<span class="hljs-keyword">function</span> <span class="hljs-title function_">ge</span>(<span class="hljs-params">e,n,t,r</span>){<span class="hljs-keyword">function</span> <span class="hljs-title function_">o</span>(<span class="hljs-params">e,n,t</span>){<span class="hljs-keyword">for</span>(e=<span class="hljs-string">"number"</span>==<span class="hljs-keyword">typeof</span> e?e.<span class="hljs-title function_">toString</span>():e||<span class="hljs-string">""</span>;e.<span class="hljs-property">length</span>&lt;n;)e=t[<span class="hljs-number">0</span>]+e;<span class="hljs-keyword">return</span> e}<span class="hljs-keyword">function</span> <span class="hljs-title function_">i</span>(<span class="hljs-params">e,n</span>){<span class="hljs-keyword">return</span> <span class="hljs-title function_">o</span>(e,n,<span class="hljs-string">"0"</span>)}<span class="hljs-keyword">function</span> <span class="hljs-title function_">a</span>(<span class="hljs-params">e,n</span>){<span class="hljs-keyword">function</span> <span class="hljs-title function_">t</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">return</span> e&lt;<span class="hljs-number">0</span>?-<span class="hljs-number">1</span>:<span class="hljs-number">0</span>&lt;e?<span class="hljs-number">1</span>:<span class="hljs-number">0</span>}<span class="hljs-keyword">var</span> r;<span class="hljs-keyword">return</span> r=<span class="hljs-number">0</span>===(r=<span class="hljs-title function_">t</span>(e.<span class="hljs-title function_">getFullYear</span>()-n.<span class="hljs-title function_">getFullYear</span>()))&amp;&amp;<span class="hljs-number">0</span>===(r=<span class="hljs-title function_">t</span>(e.<span class="hljs-title function_">getMonth</span>()-n.<span class="hljs-title function_">getMonth</span>()))?<span class="hljs-title function_">t</span>(e.<span class="hljs-title function_">getDate</span>()-n.<span class="hljs-title function_">getDate</span>()):r}<span class="hljs-keyword">function</span> <span class="hljs-title function_">u</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">switch</span>(e.<span class="hljs-title function_">getDay</span>()){<span class="hljs-keyword">case</span> <span class="hljs-number">0</span>:<span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(e.<span class="hljs-title function_">getFullYear</span>()-<span class="hljs-number">1</span>,<span class="hljs-number">11</span>,<span class="hljs-number">29</span>);<span class="hljs-keyword">case</span> <span class="hljs-number">1</span>:<span class="hljs-keyword">return</span> e;<span class="hljs-keyword">case</span> <span class="hljs-number">2</span>:<span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(e.<span class="hljs-title function_">getFullYear</span>(),<span class="hljs-number">0</span>,<span class="hljs-number">3</span>);<span class="hljs-keyword">case</span> <span class="hljs-number">3</span>:<span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(e.<span class="hljs-title function_">getFullYear</span>(),<span class="hljs-number">0</span>,<span class="hljs-number">2</span>);<span class="hljs-keyword">case</span> <span class="hljs-number">4</span>:<span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(e.<span class="hljs-title function_">getFullYear</span>(),<span class="hljs-number">0</span>,<span class="hljs-number">1</span>);<span class="hljs-keyword">case</span> <span class="hljs-number">5</span>:<span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(e.<span class="hljs-title function_">getFullYear</span>()-<span class="hljs-number">1</span>,<span class="hljs-number">11</span>,<span class="hljs-number">31</span>);<span class="hljs-keyword">case</span> <span class="hljs-number">6</span>:<span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(e.<span class="hljs-title function_">getFullYear</span>()-<span class="hljs-number">1</span>,<span class="hljs-number">11</span>,<span class="hljs-number">30</span>)}}<span class="hljs-keyword">function</span> <span class="hljs-title function_">s</span>(<span class="hljs-params">e</span>){e=<span class="hljs-title function_">x</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(e.<span class="hljs-property">A</span>+<span class="hljs-number">1900</span>,<span class="hljs-number">0</span>,<span class="hljs-number">1</span>),e.<span class="hljs-property">O</span>);<span class="hljs-keyword">var</span> n=<span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(e.<span class="hljs-title function_">getFullYear</span>()+<span class="hljs-number">1</span>,<span class="hljs-number">0</span>,<span class="hljs-number">4</span>),t=<span class="hljs-title function_">u</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(e.<span class="hljs-title function_">getFullYear</span>(),<span class="hljs-number">0</span>,<span class="hljs-number">4</span>)),n=<span class="hljs-title function_">u</span>(n);<span class="hljs-keyword">return</span> <span class="hljs-title function_">a</span>(t,e)&lt;=<span class="hljs-number">0</span>?<span class="hljs-title function_">a</span>(n,e)&lt;=<span class="hljs-number">0</span>?e.<span class="hljs-title function_">getFullYear</span>()+<span class="hljs-number">1</span>:e.<span class="hljs-title function_">getFullYear</span>():e.<span class="hljs-title function_">getFullYear</span>()-<span class="hljs-number">1</span>}<span class="hljs-keyword">var</span> c,f=g[r+<span class="hljs-number">40</span>&gt;&gt;<span class="hljs-number">2</span>];<span class="hljs-keyword">for</span>(c <span class="hljs-keyword">in</span> r={<span class="hljs-attr">V</span>:g[r&gt;&gt;<span class="hljs-number">2</span>],<span class="hljs-attr">U</span>:g[r+<span class="hljs-number">4</span>&gt;&gt;<span class="hljs-number">2</span>],<span class="hljs-attr">M</span>:g[r+<span class="hljs-number">8</span>&gt;&gt;<span class="hljs-number">2</span>],<span class="hljs-attr">L</span>:g[r+<span class="hljs-number">12</span>&gt;&gt;<span class="hljs-number">2</span>],<span class="hljs-attr">K</span>:g[r+<span class="hljs-number">16</span>&gt;&gt;<span class="hljs-number">2</span>],<span class="hljs-attr">A</span>:g[r+<span class="hljs-number">20</span>&gt;&gt;<span class="hljs-number">2</span>],<span class="hljs-attr">N</span>:g[r+<span class="hljs-number">24</span>&gt;&gt;<span class="hljs-number">2</span>],<span class="hljs-attr">O</span>:g[r+<span class="hljs-number">28</span>&gt;&gt;<span class="hljs-number">2</span>],<span class="hljs-attr">$</span>:g[r+<span class="hljs-number">32</span>&gt;&gt;<span class="hljs-number">2</span>],<span class="hljs-attr">T</span>:g[r+<span class="hljs-number">36</span>&gt;&gt;<span class="hljs-number">2</span>],<span class="hljs-attr">W</span>:f?<span class="hljs-title function_">z</span>(f):<span class="hljs-string">""</span>},t=<span class="hljs-title function_">z</span>(t),f={<span class="hljs-string">"%c"</span>:<span class="hljs-string">"%a %b %d %H:%M:%S %Y"</span>,<span class="hljs-string">"%D"</span>:<span class="hljs-string">"%m/%d/%y"</span>,<span class="hljs-string">"%F"</span>:<span class="hljs-string">"%Y-%m-%d"</span>,<span class="hljs-string">"%h"</span>:<span class="hljs-string">"%b"</span>,<span class="hljs-string">"%r"</span>:<span class="hljs-string">"%I:%M:%S %p"</span>,<span class="hljs-string">"%R"</span>:<span class="hljs-string">"%H:%M"</span>,<span class="hljs-string">"%T"</span>:<span class="hljs-string">"%H:%M:%S"</span>,<span class="hljs-string">"%x"</span>:<span class="hljs-string">"%m/%d/%y"</span>,<span class="hljs-string">"%X"</span>:<span class="hljs-string">"%H:%M:%S"</span>,<span class="hljs-string">"%Ec"</span>:<span class="hljs-string">"%c"</span>,<span class="hljs-string">"%EC"</span>:<span class="hljs-string">"%C"</span>,<span class="hljs-string">"%Ex"</span>:<span class="hljs-string">"%m/%d/%y"</span>,<span class="hljs-string">"%EX"</span>:<span class="hljs-string">"%H:%M:%S"</span>,<span class="hljs-string">"%Ey"</span>:<span class="hljs-string">"%y"</span>,<span class="hljs-string">"%EY"</span>:<span class="hljs-string">"%Y"</span>,<span class="hljs-string">"%Od"</span>:<span class="hljs-string">"%d"</span>,<span class="hljs-string">"%Oe"</span>:<span class="hljs-string">"%e"</span>,<span class="hljs-string">"%OH"</span>:<span class="hljs-string">"%H"</span>,<span class="hljs-string">"%OI"</span>:<span class="hljs-string">"%I"</span>,<span class="hljs-string">"%Om"</span>:<span class="hljs-string">"%m"</span>,<span class="hljs-string">"%OM"</span>:<span class="hljs-string">"%M"</span>,<span class="hljs-string">"%OS"</span>:<span class="hljs-string">"%S"</span>,<span class="hljs-string">"%Ou"</span>:<span class="hljs-string">"%u"</span>,<span class="hljs-string">"%OU"</span>:<span class="hljs-string">"%U"</span>,<span class="hljs-string">"%OV"</span>:<span class="hljs-string">"%V"</span>,<span class="hljs-string">"%Ow"</span>:<span class="hljs-string">"%w"</span>,<span class="hljs-string">"%OW"</span>:<span class="hljs-string">"%W"</span>,<span class="hljs-string">"%Oy"</span>:<span class="hljs-string">"%y"</span>})t=t.<span class="hljs-title function_">replace</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">RegExp</span>(c,<span class="hljs-string">"g"</span>),f[c]);<span class="hljs-keyword">var</span> l,p,m=<span class="hljs-string">"Sunday Monday Tuesday Wednesday Thursday Friday Saturday"</span>.<span class="hljs-title function_">split</span>(<span class="hljs-string">" "</span>),d=<span class="hljs-string">"January February March April May June July August September October November December"</span>.<span class="hljs-title function_">split</span>(<span class="hljs-string">" "</span>),f={<span class="hljs-string">"%a"</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">return</span> m[e.<span class="hljs-property">N</span>].<span class="hljs-title function_">substring</span>(<span class="hljs-number">0</span>,<span class="hljs-number">3</span>)},<span class="hljs-string">"%A"</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">return</span> m[e.<span class="hljs-property">N</span>]},<span class="hljs-string">"%b"</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">return</span> d[e.<span class="hljs-property">K</span>].<span class="hljs-title function_">substring</span>(<span class="hljs-number">0</span>,<span class="hljs-number">3</span>)},<span class="hljs-string">"%B"</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">return</span> d[e.<span class="hljs-property">K</span>]},<span class="hljs-string">"%C"</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">return</span> <span class="hljs-title function_">i</span>((e.<span class="hljs-property">A</span>+<span class="hljs-number">1900</span>)/<span class="hljs-number">100</span>|<span class="hljs-number">0</span>,<span class="hljs-number">2</span>)},<span class="hljs-string">"%d"</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">return</span> <span class="hljs-title function_">i</span>(e.<span class="hljs-property">L</span>,<span class="hljs-number">2</span>)},<span class="hljs-string">"%e"</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">return</span> <span class="hljs-title function_">o</span>(e.<span class="hljs-property">L</span>,<span class="hljs-number">2</span>,<span class="hljs-string">" "</span>)},<span class="hljs-string">"%g"</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">return</span> <span class="hljs-title function_">s</span>(e).<span class="hljs-title function_">toString</span>().<span class="hljs-title function_">substring</span>(<span class="hljs-number">2</span>)},<span class="hljs-string">"%G"</span>:s,<span class="hljs-string">"%H"</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">return</span> <span class="hljs-title function_">i</span>(e.<span class="hljs-property">M</span>,<span class="hljs-number">2</span>)},<span class="hljs-string">"%I"</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">return</span> <span class="hljs-number">0</span>==(e=e.<span class="hljs-property">M</span>)?e=<span class="hljs-number">12</span>:<span class="hljs-number">12</span>&lt;e&amp;&amp;(e-=<span class="hljs-number">12</span>),<span class="hljs-title function_">i</span>(e,<span class="hljs-number">2</span>)},<span class="hljs-string">"%j"</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">return</span> <span class="hljs-title function_">i</span>(e.<span class="hljs-property">L</span>+<span class="hljs-title function_">ye</span>(<span class="hljs-title function_">C</span>(e.<span class="hljs-property">A</span>+<span class="hljs-number">1900</span>)?<span class="hljs-attr">M</span>:R,e.<span class="hljs-property">K</span>-<span class="hljs-number">1</span>),<span class="hljs-number">3</span>)},<span class="hljs-string">"%m"</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">return</span> <span class="hljs-title function_">i</span>(e.<span class="hljs-property">K</span>+<span class="hljs-number">1</span>,<span class="hljs-number">2</span>)},<span class="hljs-string">"%M"</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">return</span> <span class="hljs-title function_">i</span>(e.<span class="hljs-property">U</span>,<span class="hljs-number">2</span>)},<span class="hljs-string">"%n"</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">return</span><span class="hljs-string">"\n"</span>},<span class="hljs-string">"%p"</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">return</span> <span class="hljs-number">0</span>&lt;=e.<span class="hljs-property">M</span>&amp;&amp;e.<span class="hljs-property">M</span>&lt;<span class="hljs-number">12</span>?<span class="hljs-string">"AM"</span>:<span class="hljs-string">"PM"</span>},<span class="hljs-string">"%S"</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">return</span> <span class="hljs-title function_">i</span>(e.<span class="hljs-property">V</span>,<span class="hljs-number">2</span>)},<span class="hljs-string">"%t"</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">return</span><span class="hljs-string">"\t"</span>},<span class="hljs-string">"%u"</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">return</span> e.<span class="hljs-property">N</span>||<span class="hljs-number">7</span>},<span class="hljs-string">"%U"</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">var</span> n=<span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(e.<span class="hljs-property">A</span>+<span class="hljs-number">1900</span>,<span class="hljs-number">0</span>,<span class="hljs-number">1</span>),t=<span class="hljs-number">0</span>===n.<span class="hljs-title function_">getDay</span>()?<span class="hljs-attr">n</span>:<span class="hljs-title function_">x</span>(n,<span class="hljs-number">7</span>-n.<span class="hljs-title function_">getDay</span>());<span class="hljs-keyword">return</span> <span class="hljs-title function_">a</span>(t,e=<span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(e.<span class="hljs-property">A</span>+<span class="hljs-number">1900</span>,e.<span class="hljs-property">K</span>,e.<span class="hljs-property">L</span>))&lt;<span class="hljs-number">0</span>?<span class="hljs-title function_">i</span>(<span class="hljs-title class_">Math</span>.<span class="hljs-title function_">ceil</span>((<span class="hljs-number">31</span>-t.<span class="hljs-title function_">getDate</span>()+(<span class="hljs-title function_">ye</span>(<span class="hljs-title function_">C</span>(e.<span class="hljs-title function_">getFullYear</span>())?<span class="hljs-attr">M</span>:R,e.<span class="hljs-title function_">getMonth</span>()-<span class="hljs-number">1</span>)-<span class="hljs-number">31</span>)+e.<span class="hljs-title function_">getDate</span>())/<span class="hljs-number">7</span>),<span class="hljs-number">2</span>):<span class="hljs-number">0</span>===<span class="hljs-title function_">a</span>(t,n)?<span class="hljs-string">"01"</span>:<span class="hljs-string">"00"</span>},<span class="hljs-string">"%V"</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">var</span> n=<span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(e.<span class="hljs-property">A</span>+<span class="hljs-number">1901</span>,<span class="hljs-number">0</span>,<span class="hljs-number">4</span>),t=<span class="hljs-title function_">u</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(e.<span class="hljs-property">A</span>+<span class="hljs-number">1900</span>,<span class="hljs-number">0</span>,<span class="hljs-number">4</span>)),n=<span class="hljs-title function_">u</span>(n),r=<span class="hljs-title function_">x</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(e.<span class="hljs-property">A</span>+<span class="hljs-number">1900</span>,<span class="hljs-number">0</span>,<span class="hljs-number">1</span>),e.<span class="hljs-property">O</span>);<span class="hljs-keyword">return</span> <span class="hljs-title function_">a</span>(r,t)&lt;<span class="hljs-number">0</span>?<span class="hljs-string">"53"</span>:<span class="hljs-title function_">a</span>(n,r)&lt;=<span class="hljs-number">0</span>?<span class="hljs-string">"01"</span>:<span class="hljs-title function_">i</span>(<span class="hljs-title class_">Math</span>.<span class="hljs-title function_">ceil</span>((t.<span class="hljs-title function_">getFullYear</span>()&lt;e.<span class="hljs-property">A</span>+<span class="hljs-number">1900</span>?e.<span class="hljs-property">O</span>+<span class="hljs-number">32</span>-t.<span class="hljs-title function_">getDate</span>():e.<span class="hljs-property">O</span>+<span class="hljs-number">1</span>-t.<span class="hljs-title function_">getDate</span>())/<span class="hljs-number">7</span>),<span class="hljs-number">2</span>)},<span class="hljs-string">"%w"</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">return</span> e.<span class="hljs-property">N</span>},<span class="hljs-string">"%W"</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">var</span> n=<span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(e.<span class="hljs-property">A</span>,<span class="hljs-number">0</span>,<span class="hljs-number">1</span>),t=<span class="hljs-number">1</span>===n.<span class="hljs-title function_">getDay</span>()?<span class="hljs-attr">n</span>:<span class="hljs-title function_">x</span>(n,<span class="hljs-number">0</span>===n.<span class="hljs-title function_">getDay</span>()?<span class="hljs-number">1</span>:<span class="hljs-number">7</span>-n.<span class="hljs-title function_">getDay</span>()+<span class="hljs-number">1</span>);<span class="hljs-keyword">return</span> <span class="hljs-title function_">a</span>(t,e=<span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(e.<span class="hljs-property">A</span>+<span class="hljs-number">1900</span>,e.<span class="hljs-property">K</span>,e.<span class="hljs-property">L</span>))&lt;<span class="hljs-number">0</span>?<span class="hljs-title function_">i</span>(<span class="hljs-title class_">Math</span>.<span class="hljs-title function_">ceil</span>((<span class="hljs-number">31</span>-t.<span class="hljs-title function_">getDate</span>()+(<span class="hljs-title function_">ye</span>(<span class="hljs-title function_">C</span>(e.<span class="hljs-title function_">getFullYear</span>())?<span class="hljs-attr">M</span>:R,e.<span class="hljs-title function_">getMonth</span>()-<span class="hljs-number">1</span>)-<span class="hljs-number">31</span>)+e.<span class="hljs-title function_">getDate</span>())/<span class="hljs-number">7</span>),<span class="hljs-number">2</span>):<span class="hljs-number">0</span>===<span class="hljs-title function_">a</span>(t,n)?<span class="hljs-string">"01"</span>:<span class="hljs-string">"00"</span>},<span class="hljs-string">"%y"</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">return</span>(e.<span class="hljs-property">A</span>+<span class="hljs-number">1900</span>).<span class="hljs-title function_">toString</span>().<span class="hljs-title function_">substring</span>(<span class="hljs-number">2</span>)},<span class="hljs-string">"%Y"</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">return</span> e.<span class="hljs-property">A</span>+<span class="hljs-number">1900</span>},<span class="hljs-string">"%z"</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">var</span> n=<span class="hljs-number">0</span>&lt;=(e=e.<span class="hljs-property">T</span>);<span class="hljs-keyword">return</span> e=<span class="hljs-title class_">Math</span>.<span class="hljs-title function_">abs</span>(e)/<span class="hljs-number">60</span>,(n?<span class="hljs-string">"+"</span>:<span class="hljs-string">"-"</span>)+<span class="hljs-title class_">String</span>(<span class="hljs-string">"0000"</span>+(e/<span class="hljs-number">60</span>*<span class="hljs-number">100</span>+e%<span class="hljs-number">60</span>)).<span class="hljs-title function_">slice</span>(-<span class="hljs-number">4</span>)},<span class="hljs-string">"%Z"</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">return</span> e.<span class="hljs-property">W</span>},<span class="hljs-string">"%%"</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">return</span><span class="hljs-string">"%"</span>}};<span class="hljs-keyword">for</span>(c <span class="hljs-keyword">in</span> t=t.<span class="hljs-title function_">replace</span>(<span class="hljs-regexp">/%%/g</span>,<span class="hljs-string">"\0\0"</span>),f)t.<span class="hljs-title function_">includes</span>(c)&amp;&amp;(t=t.<span class="hljs-title function_">replace</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">RegExp</span>(c,<span class="hljs-string">"g"</span>),f[c](r)));<span class="hljs-keyword">return</span> t=t.<span class="hljs-title function_">replace</span>(<span class="hljs-regexp">/\0\0/g</span>,<span class="hljs-string">"%"</span>),l=t,p=<span class="hljs-title class_">Array</span>(<span class="hljs-title function_">V</span>(l)+<span class="hljs-number">1</span>),<span class="hljs-title function_">G</span>(l,p,<span class="hljs-number">0</span>,p.<span class="hljs-property">length</span>),(c=p).<span class="hljs-property">length</span>&gt;n?<span class="hljs-number">0</span>:(h.<span class="hljs-title function_">set</span>(c,e),c.<span class="hljs-property">length</span>-<span class="hljs-number">1</span>)}<span class="hljs-keyword">function</span> <span class="hljs-title function_">F</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">try</span>{<span class="hljs-title function_">e</span>()}<span class="hljs-keyword">catch</span>(e){<span class="hljs-title function_">A</span>(e)}}<span class="hljs-keyword">var</span> O=<span class="hljs-number">0</span>,E=<span class="hljs-literal">null</span>,I=[],ve={},we={},_e=<span class="hljs-number">0</span>,be=<span class="hljs-literal">null</span>,<span class="hljs-title class_">Se</span>=[];<span class="hljs-keyword">function</span> <span class="hljs-title function_">Ae</span>(<span class="hljs-params">t</span>){<span class="hljs-keyword">var</span> e,r={};<span class="hljs-keyword">for</span>(e <span class="hljs-keyword">in</span> t)!<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">var</span> n=t[e];r[e]=<span class="hljs-string">"function"</span>==<span class="hljs-keyword">typeof</span> n?<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){I.<span class="hljs-title function_">push</span>(e);<span class="hljs-keyword">try</span>{<span class="hljs-keyword">return</span> n.<span class="hljs-title function_">apply</span>(<span class="hljs-literal">null</span>,<span class="hljs-variable language_">arguments</span>)}<span class="hljs-keyword">finally</span>{v||(I.<span class="hljs-title function_">pop</span>()!==e&amp;&amp;<span class="hljs-title function_">A</span>(<span class="hljs-keyword">void</span> <span class="hljs-number">0</span>),E&amp;&amp;<span class="hljs-number">1</span>===O&amp;&amp;<span class="hljs-number">0</span>===I.<span class="hljs-property">length</span>&amp;&amp;(O=<span class="hljs-number">0</span>,<span class="hljs-title function_">F</span>(l.<span class="hljs-property">_asyncify_stop_unwind</span>),<span class="hljs-string">"undefined"</span>!=<span class="hljs-keyword">typeof</span> <span class="hljs-title class_">Fibers</span>)&amp;&amp;<span class="hljs-title class_">Fibers</span>.<span class="hljs-title function_">aa</span>())}}:n}(e);<span class="hljs-keyword">return</span> r}<span class="hljs-keyword">function</span> <span class="hljs-title function_">De</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">var</span> o,i,n,t;v||(<span class="hljs-number">0</span>===O?(i=o=!<span class="hljs-number">1</span>,<span class="hljs-title function_">e</span>(<span class="hljs-function">()=&gt;</span>{<span class="hljs-keyword">if</span>(!v&amp;&amp;(o=!<span class="hljs-number">0</span>,i)){O=<span class="hljs-number">2</span>,<span class="hljs-title function_">F</span>(<span class="hljs-function">()=&gt;</span>l.<span class="hljs-title function_">_asyncify_start_rewind</span>(E)),<span class="hljs-string">"undefined"</span>!=<span class="hljs-keyword">typeof</span> <span class="hljs-title class_">Browser</span>&amp;&amp;<span class="hljs-title class_">Browser</span>.<span class="hljs-property">R</span>.<span class="hljs-property">S</span>&amp;&amp;<span class="hljs-title class_">Browser</span>.<span class="hljs-property">R</span>.<span class="hljs-title function_">resume</span>();<span class="hljs-keyword">var</span> n=!<span class="hljs-number">1</span>;<span class="hljs-keyword">try</span>{<span class="hljs-keyword">var</span> t=(<span class="hljs-number">0</span>,l.<span class="hljs-property">asm</span>[we[g[E+<span class="hljs-number">8</span>&gt;&gt;<span class="hljs-number">2</span>]]])()}<span class="hljs-keyword">catch</span>(e){t=e,n=!<span class="hljs-number">0</span>}<span class="hljs-keyword">var</span> e,r=!<span class="hljs-number">1</span>;<span class="hljs-keyword">if</span>(E||(e=be)&amp;&amp;(be=<span class="hljs-literal">null</span>,(n?e.<span class="hljs-property">reject</span>:e.<span class="hljs-property">resolve</span>)(t),r=!<span class="hljs-number">0</span>),n&amp;&amp;!r)<span class="hljs-keyword">throw</span> t}}),i=!<span class="hljs-number">0</span>,o||(O=<span class="hljs-number">1</span>,e=<span class="hljs-title function_">xe</span>(<span class="hljs-number">10485772</span>),n=e+<span class="hljs-number">12</span>,g[e&gt;&gt;<span class="hljs-number">2</span>]=n,g[e+<span class="hljs-number">4</span>&gt;&gt;<span class="hljs-number">2</span>]=n+<span class="hljs-number">10485760</span>,n=I[<span class="hljs-number">0</span>],<span class="hljs-keyword">void</span> <span class="hljs-number">0</span>===(t=ve[n])&amp;&amp;(t=_e++,ve[n]=t,we[t]=n),g[e+<span class="hljs-number">8</span>&gt;&gt;<span class="hljs-number">2</span>]=t,E=e,<span class="hljs-title function_">F</span>(<span class="hljs-function">()=&gt;</span>l.<span class="hljs-title function_">_asyncify_start_unwind</span>(E)),<span class="hljs-string">"undefined"</span>!=<span class="hljs-keyword">typeof</span> <span class="hljs-title class_">Browser</span>&amp;&amp;<span class="hljs-title class_">Browser</span>.<span class="hljs-property">R</span>.<span class="hljs-property">S</span>&amp;&amp;<span class="hljs-title class_">Browser</span>.<span class="hljs-property">R</span>.<span class="hljs-title function_">pause</span>())):<span class="hljs-number">2</span>===O?(O=<span class="hljs-number">0</span>,<span class="hljs-title function_">F</span>(l.<span class="hljs-property">_asyncify_stop_rewind</span>),<span class="hljs-title class_">Me</span>(E),E=<span class="hljs-literal">null</span>,<span class="hljs-title class_">Se</span>.<span class="hljs-title function_">forEach</span>(<span class="hljs-function"><span class="hljs-params">e</span>=&gt;</span><span class="hljs-title function_">pe</span>(e))):<span class="hljs-title function_">A</span>(<span class="hljs-string">"invalid state: "</span>+O))}<span class="hljs-keyword">var</span> P,<span class="hljs-title class_">Ce</span>={<span class="hljs-attr">d</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">return</span> <span class="hljs-number">0</span>},<span class="hljs-attr">i</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){},<span class="hljs-attr">r</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">return</span> <span class="hljs-number">0</span>},<span class="hljs-attr">f</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){},<span class="hljs-attr">a</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-title function_">A</span>(<span class="hljs-string">""</span>)},<span class="hljs-attr">g</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e,n</span>){<span class="hljs-keyword">if</span>(<span class="hljs-number">0</span>===e)e=<span class="hljs-title class_">Date</span>.<span class="hljs-title function_">now</span>();<span class="hljs-keyword">else</span>{<span class="hljs-keyword">if</span>(<span class="hljs-number">1</span>!==e&amp;&amp;<span class="hljs-number">4</span>!==e)<span class="hljs-keyword">return</span> g[<span class="hljs-title class_">Re</span>()&gt;&gt;<span class="hljs-number">2</span>]=<span class="hljs-number">28</span>,-<span class="hljs-number">1</span>;e=<span class="hljs-title function_">fe</span>()}<span class="hljs-keyword">return</span> g[n&gt;&gt;<span class="hljs-number">2</span>]=e/<span class="hljs-number">1e3</span>|<span class="hljs-number">0</span>,g[n+<span class="hljs-number">4</span>&gt;&gt;<span class="hljs-number">2</span>]=e%<span class="hljs-number">1e3</span>*<span class="hljs-number">1e6</span>|<span class="hljs-number">0</span>,<span class="hljs-number">0</span>},<span class="hljs-attr">j</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e,n,t</span>){<span class="hljs-keyword">var</span> r;<span class="hljs-keyword">for</span>(le.<span class="hljs-property">length</span>=<span class="hljs-number">0</span>,t&gt;&gt;=<span class="hljs-number">2</span>;r=y[n++];)(r=r&lt;<span class="hljs-number">105</span>)&amp;&amp;<span class="hljs-number">1</span>&amp;t&amp;&amp;t++,le.<span class="hljs-title function_">push</span>(r?N[t++&gt;&gt;<span class="hljs-number">1</span>]:g[t]),++t;<span class="hljs-keyword">return</span> ae[e].<span class="hljs-title function_">apply</span>(<span class="hljs-literal">null</span>,le)},<span class="hljs-attr">h</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e,n,t</span>){y.<span class="hljs-title function_">copyWithin</span>(e,n,n+t)},<span class="hljs-attr">c</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">var</span> n=y.<span class="hljs-property">length</span>;<span class="hljs-keyword">if</span>(!(<span class="hljs-number">2147483648</span>&lt;(e&gt;&gt;&gt;=<span class="hljs-number">0</span>)))<span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> t=<span class="hljs-number">1</span>;t&lt;=<span class="hljs-number">4</span>;t*=<span class="hljs-number">2</span>){<span class="hljs-keyword">var</span> r=n*(<span class="hljs-number">1</span>+<span class="hljs-number">.2</span>/t),r=<span class="hljs-title class_">Math</span>.<span class="hljs-title function_">min</span>(r,e+<span class="hljs-number">100663296</span>),o=<span class="hljs-title class_">Math</span>;r=<span class="hljs-title class_">Math</span>.<span class="hljs-title function_">max</span>(e,r),o=o.<span class="hljs-property">min</span>.<span class="hljs-title function_">call</span>(o,<span class="hljs-number">2147483648</span>,r+(<span class="hljs-number">65536</span>-r%<span class="hljs-number">65536</span>)%<span class="hljs-number">65536</span>);<span class="hljs-attr">e</span>:{<span class="hljs-keyword">try</span>{W.<span class="hljs-title function_">grow</span>(o-B.<span class="hljs-property">byteLength</span>+<span class="hljs-number">65535</span>&gt;&gt;&gt;<span class="hljs-number">16</span>),<span class="hljs-title function_">Z</span>();<span class="hljs-keyword">var</span> i=<span class="hljs-number">1</span>;<span class="hljs-keyword">break</span> e}<span class="hljs-keyword">catch</span>(e){}i=<span class="hljs-keyword">void</span> <span class="hljs-number">0</span>}<span class="hljs-keyword">if</span>(i)<span class="hljs-keyword">return</span>!<span class="hljs-number">0</span>}<span class="hljs-keyword">return</span>!<span class="hljs-number">1</span>},<span class="hljs-attr">k</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">t</span>){<span class="hljs-title class_">De</span>(<span class="hljs-function"><span class="hljs-params">e</span>=&gt;</span>{<span class="hljs-keyword">return</span> n=e,<span class="hljs-built_in">setTimeout</span>(<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-title function_">pe</span>(n)},t);<span class="hljs-keyword">var</span> n})},<span class="hljs-attr">n</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">r,o</span>){<span class="hljs-keyword">var</span> i=<span class="hljs-number">0</span>;<span class="hljs-keyword">return</span> <span class="hljs-title function_">he</span>().<span class="hljs-title function_">forEach</span>(<span class="hljs-keyword">function</span>(<span class="hljs-params">e,n</span>){<span class="hljs-keyword">var</span> t=o+i;<span class="hljs-keyword">for</span>(n=g[r+<span class="hljs-number">4</span>*n&gt;&gt;<span class="hljs-number">2</span>]=t,t=<span class="hljs-number">0</span>;t&lt;e.<span class="hljs-property">length</span>;++t)h[n++&gt;&gt;<span class="hljs-number">0</span>]=e.<span class="hljs-title function_">charCodeAt</span>(t);h[n&gt;&gt;<span class="hljs-number">0</span>]=<span class="hljs-number">0</span>,i+=e.<span class="hljs-property">length</span>+<span class="hljs-number">1</span>}),<span class="hljs-number">0</span>},<span class="hljs-attr">o</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e,n</span>){<span class="hljs-keyword">var</span> t=<span class="hljs-title function_">he</span>(),r=(g[e&gt;&gt;<span class="hljs-number">2</span>]=t.<span class="hljs-property">length</span>,<span class="hljs-number">0</span>);<span class="hljs-keyword">return</span> t.<span class="hljs-title function_">forEach</span>(<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){r+=e.<span class="hljs-property">length</span>+<span class="hljs-number">1</span>}),g[n&gt;&gt;<span class="hljs-number">2</span>]=r,<span class="hljs-number">0</span>},<span class="hljs-attr">b</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-title class_">Ye</span>(e)},<span class="hljs-attr">e</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">return</span> <span class="hljs-number">0</span>},<span class="hljs-attr">q</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e,n,t,r</span>){<span class="hljs-keyword">return</span> e=ce.<span class="hljs-title function_">Y</span>(e),n=ce.<span class="hljs-title function_">X</span>(e,n,t),g[r&gt;&gt;<span class="hljs-number">2</span>]=n,<span class="hljs-number">0</span>},<span class="hljs-attr">l</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){},<span class="hljs-attr">p</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e,n,t,r</span>){<span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> o=<span class="hljs-number">0</span>,i=<span class="hljs-number">0</span>;i&lt;t;i++){<span class="hljs-keyword">var</span> a=g[n&gt;&gt;<span class="hljs-number">2</span>],u=g[n+<span class="hljs-number">4</span>&gt;&gt;<span class="hljs-number">2</span>];n+=<span class="hljs-number">8</span>;<span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> s=<span class="hljs-number">0</span>;s&lt;u;s++){<span class="hljs-keyword">var</span> c=y[a+s],f=se[e];<span class="hljs-number">0</span>===c||<span class="hljs-number">10</span>===c?((<span class="hljs-number">1</span>===e?<span class="hljs-attr">q</span>:m)(<span class="hljs-title function_">X</span>(f,<span class="hljs-number">0</span>)),f.<span class="hljs-property">length</span>=<span class="hljs-number">0</span>):f.<span class="hljs-title function_">push</span>(c)}o+=u}<span class="hljs-keyword">return</span> g[r&gt;&gt;<span class="hljs-number">2</span>]=o,<span class="hljs-number">0</span>},<span class="hljs-attr">m</span>:ge},<span class="hljs-title class_">Me</span>=(!<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">function</span> <span class="hljs-title function_">n</span>(<span class="hljs-params">e</span>){e=<span class="hljs-title class_">Ae</span>(e=e.<span class="hljs-property">exports</span>),l.<span class="hljs-property">asm</span>=e,W=l.<span class="hljs-property">asm</span>.<span class="hljs-property">s</span>,<span class="hljs-title function_">Z</span>(),Q.<span class="hljs-title function_">unshift</span>(l.<span class="hljs-property">asm</span>.<span class="hljs-property">t</span>),b--,l.<span class="hljs-property">monitorRunDependencies</span>&amp;&amp;l.<span class="hljs-title function_">monitorRunDependencies</span>(b),<span class="hljs-number">0</span>==b&amp;&amp;(<span class="hljs-literal">null</span>!==re&amp;&amp;(<span class="hljs-built_in">clearInterval</span>(re),re=<span class="hljs-literal">null</span>),S)&amp;&amp;(e=S,S=<span class="hljs-literal">null</span>,<span class="hljs-title function_">e</span>())}<span class="hljs-keyword">function</span> <span class="hljs-title function_">t</span>(<span class="hljs-params">e</span>){<span class="hljs-title function_">n</span>(e.<span class="hljs-property">instance</span>)}<span class="hljs-keyword">function</span> <span class="hljs-title function_">r</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">return</span>(a||!k&amp;&amp;!f||<span class="hljs-string">"function"</span>!=<span class="hljs-keyword">typeof</span> fetch?<span class="hljs-title class_">Promise</span>.<span class="hljs-title function_">resolve</span>().<span class="hljs-title function_">then</span>(ie):<span class="hljs-title function_">fetch</span>(w,{<span class="hljs-attr">credentials</span>:<span class="hljs-string">"same-origin"</span>}).<span class="hljs-title function_">then</span>(<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">if</span>(e.<span class="hljs-property">ok</span>)<span class="hljs-keyword">return</span> e.<span class="hljs-title function_">arrayBuffer</span>();<span class="hljs-keyword">throw</span><span class="hljs-string">"failed to load wasm binary file at '"</span>+w+<span class="hljs-string">"'"</span>}).<span class="hljs-title function_">catch</span>(ie)).<span class="hljs-title function_">then</span>(<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">return</span> <span class="hljs-title class_">WebAssembly</span>.<span class="hljs-title function_">instantiate</span>(e,o)}).<span class="hljs-title function_">then</span>(<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">return</span> e}).<span class="hljs-title function_">then</span>(e,<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-title function_">m</span>(<span class="hljs-string">"failed to asynchronously prepare wasm: "</span>+e),<span class="hljs-title function_">A</span>(e)})}<span class="hljs-keyword">var</span> o={<span class="hljs-attr">a</span>:<span class="hljs-title class_">Ce</span>};<span class="hljs-keyword">if</span>(b++,l.<span class="hljs-property">monitorRunDependencies</span>&amp;&amp;l.<span class="hljs-title function_">monitorRunDependencies</span>(b),l.<span class="hljs-property">instantiateWasm</span>)<span class="hljs-keyword">try</span>{<span class="hljs-keyword">var</span> e=l.<span class="hljs-title function_">instantiateWasm</span>(o,n);<span class="hljs-keyword">return</span> <span class="hljs-title class_">Ae</span>(e)}<span class="hljs-keyword">catch</span>(e){<span class="hljs-keyword">return</span> <span class="hljs-title function_">m</span>(<span class="hljs-string">"Module.instantiateWasm callback failed with error: "</span>+e)}(a||<span class="hljs-string">"function"</span>!=<span class="hljs-keyword">typeof</span> <span class="hljs-title class_">WebAssembly</span>.<span class="hljs-property">instantiateStreaming</span>||<span class="hljs-title function_">oe</span>()||<span class="hljs-string">"function"</span>!=<span class="hljs-keyword">typeof</span> fetch?<span class="hljs-title function_">r</span>(t):<span class="hljs-title function_">fetch</span>(w,{<span class="hljs-attr">credentials</span>:<span class="hljs-string">"same-origin"</span>}).<span class="hljs-title function_">then</span>(<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">return</span> <span class="hljs-title class_">WebAssembly</span>.<span class="hljs-title function_">instantiateStreaming</span>(e,o).<span class="hljs-title function_">then</span>(t,<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">return</span> <span class="hljs-title function_">m</span>(<span class="hljs-string">"wasm streaming compile failed: "</span>+e),<span class="hljs-title function_">m</span>(<span class="hljs-string">"falling back to ArrayBuffer instantiation"</span>),<span class="hljs-title function_">r</span>(t)})})).<span class="hljs-title function_">catch</span>(i)}(),l.<span class="hljs-property">___wasm_call_ctors</span>=<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">return</span>(l.<span class="hljs-property">___wasm_call_ctors</span>=l.<span class="hljs-property">asm</span>.<span class="hljs-property">t</span>).<span class="hljs-title function_">apply</span>(<span class="hljs-literal">null</span>,<span class="hljs-variable language_">arguments</span>)},l.<span class="hljs-property">_main</span>=<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">return</span>(l.<span class="hljs-property">_main</span>=l.<span class="hljs-property">asm</span>.<span class="hljs-property">u</span>).<span class="hljs-title function_">apply</span>(<span class="hljs-literal">null</span>,<span class="hljs-variable language_">arguments</span>)},l.<span class="hljs-property">_command</span>=<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">return</span>(l.<span class="hljs-property">_command</span>=l.<span class="hljs-property">asm</span>.<span class="hljs-property">v</span>).<span class="hljs-title function_">apply</span>(<span class="hljs-literal">null</span>,<span class="hljs-variable language_">arguments</span>)},l.<span class="hljs-property">_isSearching</span>=<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">return</span>(l.<span class="hljs-property">_isSearching</span>=l.<span class="hljs-property">asm</span>.<span class="hljs-property">w</span>).<span class="hljs-title function_">apply</span>(<span class="hljs-literal">null</span>,<span class="hljs-variable language_">arguments</span>)},l.<span class="hljs-property">_free</span>=<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">return</span>(<span class="hljs-title class_">Me</span>=l.<span class="hljs-property">_free</span>=l.<span class="hljs-property">asm</span>.<span class="hljs-property">x</span>).<span class="hljs-title function_">apply</span>(<span class="hljs-literal">null</span>,<span class="hljs-variable language_">arguments</span>)}),<span class="hljs-title class_">Re</span>=l.<span class="hljs-property">___errno_location</span>=<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">return</span>(<span class="hljs-title class_">Re</span>=l.<span class="hljs-property">___errno_location</span>=l.<span class="hljs-property">asm</span>.<span class="hljs-property">y</span>).<span class="hljs-title function_">apply</span>(<span class="hljs-literal">null</span>,<span class="hljs-variable language_">arguments</span>)},xe=l.<span class="hljs-property">_malloc</span>=<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">return</span>(xe=l.<span class="hljs-property">_malloc</span>=l.<span class="hljs-property">asm</span>.<span class="hljs-property">z</span>).<span class="hljs-title function_">apply</span>(<span class="hljs-literal">null</span>,<span class="hljs-variable language_">arguments</span>)},<span class="hljs-title class_">Fe</span>=l.<span class="hljs-property">stackSave</span>=<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">return</span>(<span class="hljs-title class_">Fe</span>=l.<span class="hljs-property">stackSave</span>=l.<span class="hljs-property">asm</span>.<span class="hljs-property">B</span>).<span class="hljs-title function_">apply</span>(<span class="hljs-literal">null</span>,<span class="hljs-variable language_">arguments</span>)},<span class="hljs-title class_">Oe</span>=l.<span class="hljs-property">stackRestore</span>=<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">return</span>(<span class="hljs-title class_">Oe</span>=l.<span class="hljs-property">stackRestore</span>=l.<span class="hljs-property">asm</span>.<span class="hljs-property">C</span>).<span class="hljs-title function_">apply</span>(<span class="hljs-literal">null</span>,<span class="hljs-variable language_">arguments</span>)},Y=l.<span class="hljs-property">stackAlloc</span>=<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">return</span>(Y=l.<span class="hljs-property">stackAlloc</span>=l.<span class="hljs-property">asm</span>.<span class="hljs-property">D</span>).<span class="hljs-title function_">apply</span>(<span class="hljs-literal">null</span>,<span class="hljs-variable language_">arguments</span>)},<span class="hljs-title class_">Ee</span>=l.<span class="hljs-property">dynCall_vi</span>=<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">return</span>(<span class="hljs-title class_">Ee</span>=l.<span class="hljs-property">dynCall_vi</span>=l.<span class="hljs-property">asm</span>.<span class="hljs-property">E</span>).<span class="hljs-title function_">apply</span>(<span class="hljs-literal">null</span>,<span class="hljs-variable language_">arguments</span>)},<span class="hljs-title class_">Ie</span>=l.<span class="hljs-property">dynCall_v</span>=<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">return</span>(<span class="hljs-title class_">Ie</span>=l.<span class="hljs-property">dynCall_v</span>=l.<span class="hljs-property">asm</span>.<span class="hljs-property">F</span>).<span class="hljs-title function_">apply</span>(<span class="hljs-literal">null</span>,<span class="hljs-variable language_">arguments</span>)};<span class="hljs-keyword">function</span> <span class="hljs-title function_">j</span>(<span class="hljs-params">e</span>){<span class="hljs-variable language_">this</span>.<span class="hljs-property">name</span>=<span class="hljs-string">"ExitStatus"</span>,<span class="hljs-variable language_">this</span>.<span class="hljs-property">message</span>=<span class="hljs-string">"Program terminated with exit("</span>+e+<span class="hljs-string">")"</span>,<span class="hljs-variable language_">this</span>.<span class="hljs-property">status</span>=e}<span class="hljs-keyword">function</span> <span class="hljs-title function_">Pe</span>(<span class="hljs-params">i</span>){<span class="hljs-keyword">function</span> <span class="hljs-title function_">e</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">if</span>(!P&amp;&amp;(P=!<span class="hljs-number">0</span>,l.<span class="hljs-property">calledRun</span>=!<span class="hljs-number">0</span>,!v)){<span class="hljs-keyword">if</span>(<span class="hljs-title function_">D</span>(Q),<span class="hljs-title function_">D</span>(ee),<span class="hljs-title function_">T</span>(l),l.<span class="hljs-property">onRuntimeInitialized</span>&amp;&amp;l.<span class="hljs-title function_">onRuntimeInitialized</span>(),je){<span class="hljs-keyword">var</span> e=i,n=l.<span class="hljs-property">_main</span>,t=(e=e||[]).<span class="hljs-property">length</span>+<span class="hljs-number">1</span>,r=<span class="hljs-title function_">Y</span>(<span class="hljs-number">4</span>*(t+<span class="hljs-number">1</span>));g[r&gt;&gt;<span class="hljs-number">2</span>]=<span class="hljs-title function_">J</span>(s);<span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> o=<span class="hljs-number">1</span>;o&lt;t;o++)g[(r&gt;&gt;<span class="hljs-number">2</span>)+o]=<span class="hljs-title function_">J</span>(e[o-<span class="hljs-number">1</span>]);g[(r&gt;&gt;<span class="hljs-number">2</span>)+t]=<span class="hljs-number">0</span>;<span class="hljs-keyword">try</span>{<span class="hljs-title class_">Ye</span>(<span class="hljs-title function_">n</span>(t,r))}<span class="hljs-keyword">catch</span>(e){<span class="hljs-title function_">ue</span>(e)}}<span class="hljs-keyword">if</span>(l.<span class="hljs-property">postRun</span>)<span class="hljs-keyword">for</span>(<span class="hljs-string">"function"</span>==<span class="hljs-keyword">typeof</span> l.<span class="hljs-property">postRun</span>&amp;&amp;(l.<span class="hljs-property">postRun</span>=[l.<span class="hljs-property">postRun</span>]);l.<span class="hljs-property">postRun</span>.<span class="hljs-property">length</span>;)e=l.<span class="hljs-property">postRun</span>.<span class="hljs-title function_">shift</span>(),ne.<span class="hljs-title function_">unshift</span>(e);<span class="hljs-title function_">D</span>(ne)}}<span class="hljs-keyword">if</span>(i=i||u,!(<span class="hljs-number">0</span>&lt;b)){<span class="hljs-keyword">if</span>(l.<span class="hljs-property">preRun</span>)<span class="hljs-keyword">for</span>(<span class="hljs-string">"function"</span>==<span class="hljs-keyword">typeof</span> l.<span class="hljs-property">preRun</span>&amp;&amp;(l.<span class="hljs-property">preRun</span>=[l.<span class="hljs-property">preRun</span>]);l.<span class="hljs-property">preRun</span>.<span class="hljs-property">length</span>;)n=<span class="hljs-keyword">void</span> <span class="hljs-number">0</span>,n=l.<span class="hljs-property">preRun</span>.<span class="hljs-title function_">shift</span>(),$.<span class="hljs-title function_">unshift</span>(n);<span class="hljs-title function_">D</span>($),<span class="hljs-number">0</span>&lt;b||(l.<span class="hljs-property">setStatus</span>?(l.<span class="hljs-title function_">setStatus</span>(<span class="hljs-string">"Running..."</span>),<span class="hljs-built_in">setTimeout</span>(<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-built_in">setTimeout</span>(<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){l.<span class="hljs-title function_">setStatus</span>(<span class="hljs-string">""</span>)},<span class="hljs-number">1</span>),<span class="hljs-title function_">e</span>()},<span class="hljs-number">1</span>)):<span class="hljs-title function_">e</span>())}<span class="hljs-keyword">var</span> n}<span class="hljs-keyword">function</span> <span class="hljs-title function_">Ye</span>(<span class="hljs-params">e</span>){d||<span class="hljs-number">0</span>&lt;_||(te=!<span class="hljs-number">0</span>),d||<span class="hljs-number">0</span>&lt;_||(l.<span class="hljs-property">onExit</span>&amp;&amp;l.<span class="hljs-title function_">onExit</span>(e),v=!<span class="hljs-number">0</span>),<span class="hljs-title function_">c</span>(e,<span class="hljs-keyword">new</span> <span class="hljs-title function_">j</span>(e))}<span class="hljs-keyword">if</span>(l.<span class="hljs-property">_asyncify_start_unwind</span>=<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">return</span>(l.<span class="hljs-property">_asyncify_start_unwind</span>=l.<span class="hljs-property">asm</span>.<span class="hljs-property">G</span>).<span class="hljs-title function_">apply</span>(<span class="hljs-literal">null</span>,<span class="hljs-variable language_">arguments</span>)},l.<span class="hljs-property">_asyncify_stop_unwind</span>=<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">return</span>(l.<span class="hljs-property">_asyncify_stop_unwind</span>=l.<span class="hljs-property">asm</span>.<span class="hljs-property">H</span>).<span class="hljs-title function_">apply</span>(<span class="hljs-literal">null</span>,<span class="hljs-variable language_">arguments</span>)},l.<span class="hljs-property">_asyncify_start_rewind</span>=<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">return</span>(l.<span class="hljs-property">_asyncify_start_rewind</span>=l.<span class="hljs-property">asm</span>.<span class="hljs-property">I</span>).<span class="hljs-title function_">apply</span>(<span class="hljs-literal">null</span>,<span class="hljs-variable language_">arguments</span>)},l.<span class="hljs-property">_asyncify_stop_rewind</span>=<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">return</span>(l.<span class="hljs-property">_asyncify_stop_rewind</span>=l.<span class="hljs-property">asm</span>.<span class="hljs-property">J</span>).<span class="hljs-title function_">apply</span>(<span class="hljs-literal">null</span>,<span class="hljs-variable language_">arguments</span>)},l.<span class="hljs-property">ccall</span>=<span class="hljs-keyword">function</span>(<span class="hljs-params">e,n,t,r,o</span>){<span class="hljs-keyword">function</span> <span class="hljs-title function_">i</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">return</span>--_,<span class="hljs-number">0</span>!==s&amp;&amp;<span class="hljs-title class_">Oe</span>(s),<span class="hljs-string">"string"</span>===n?<span class="hljs-title function_">z</span>(e):<span class="hljs-string">"boolean"</span>===n?!!<span class="hljs-attr">e</span>:e}<span class="hljs-keyword">var</span> a={<span class="hljs-attr">string</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">var</span> n,t=<span class="hljs-number">0</span>;<span class="hljs-keyword">return</span> <span class="hljs-literal">null</span>!=e&amp;&amp;<span class="hljs-number">0</span>!==e&amp;&amp;(n=<span class="hljs-number">1</span>+(e.<span class="hljs-property">length</span>&lt;&lt;<span class="hljs-number">2</span>),t=<span class="hljs-title function_">Y</span>(n),<span class="hljs-title function_">G</span>(e,y,t,n)),t},<span class="hljs-attr">array</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">var</span> n=<span class="hljs-title function_">Y</span>(e.<span class="hljs-property">length</span>);<span class="hljs-keyword">return</span> h.<span class="hljs-title function_">set</span>(e,n),n}},u=(e=l[<span class="hljs-string">"_"</span>+e],[]),s=<span class="hljs-number">0</span>;<span class="hljs-keyword">if</span>(r)<span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> c=<span class="hljs-number">0</span>;c&lt;r.<span class="hljs-property">length</span>;c++){<span class="hljs-keyword">var</span> f=a[t[c]];f?(<span class="hljs-number">0</span>===s&amp;&amp;(s=<span class="hljs-title class_">Fe</span>()),u[c]=<span class="hljs-title function_">f</span>(r[c])):u[c]=r[c]}<span class="hljs-keyword">return</span> t=E,r=e.<span class="hljs-title function_">apply</span>(<span class="hljs-literal">null</span>,u),_+=<span class="hljs-number">1</span>,o=o&amp;&amp;o.<span class="hljs-property">async</span>,E!=t?<span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">e,n</span>)=&gt;</span>{be={<span class="hljs-attr">resolve</span>:e,<span class="hljs-attr">reject</span>:n}}).<span class="hljs-title function_">then</span>(i):(r=<span class="hljs-title function_">i</span>(r),o?<span class="hljs-title class_">Promise</span>.<span class="hljs-title function_">resolve</span>(r):r)},S=<span class="hljs-keyword">function</span> <span class="hljs-title function_">e</span>(<span class="hljs-params"></span>){P||<span class="hljs-title class_">Pe</span>(),P||(S=e)},l.<span class="hljs-property">run</span>=<span class="hljs-title class_">Pe</span>,l.<span class="hljs-property">preInit</span>)<span class="hljs-keyword">for</span>(<span class="hljs-string">"function"</span>==<span class="hljs-keyword">typeof</span> l.<span class="hljs-property">preInit</span>&amp;&amp;(l.<span class="hljs-property">preInit</span>=[l.<span class="hljs-property">preInit</span>]);<span class="hljs-number">0</span>&lt;l.<span class="hljs-property">preInit</span>.<span class="hljs-property">length</span>;)l.<span class="hljs-property">preInit</span>.<span class="hljs-title function_">pop</span>()();<span class="hljs-keyword">var</span> je=!<span class="hljs-number">0</span>;<span class="hljs-keyword">return</span> l.<span class="hljs-property">noInitialRun</span>&amp;&amp;(je=!<span class="hljs-number">1</span>),<span class="hljs-title class_">Pe</span>(),e.<span class="hljs-property">ready</span>}<span class="hljs-keyword">var</span> <span class="hljs-title class_">Te</span>;<span class="hljs-title class_">Te</span>=<span class="hljs-string">"undefined"</span>!=<span class="hljs-keyword">typeof</span> <span class="hljs-variable language_">document</span>&amp;&amp;<span class="hljs-variable language_">document</span>.<span class="hljs-property">currentScript</span>?<span class="hljs-variable language_">document</span>.<span class="hljs-property">currentScript</span>.<span class="hljs-property">src</span>:<span class="hljs-keyword">void</span> <span class="hljs-number">0</span>,<span class="hljs-string">"undefined"</span>!=<span class="hljs-keyword">typeof</span> __filename&amp;&amp;(<span class="hljs-title class_">Te</span>=<span class="hljs-title class_">Te</span>||__filename);<span class="hljs-keyword">return</span><span class="hljs-string">"object"</span>==<span class="hljs-keyword">typeof</span> <span class="hljs-built_in">exports</span>&amp;&amp;<span class="hljs-string">"object"</span>==<span class="hljs-keyword">typeof</span> <span class="hljs-variable language_">module</span>?<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span>=<span class="hljs-attr">e</span>:<span class="hljs-string">"function"</span>==<span class="hljs-keyword">typeof</span> define&amp;&amp;define.<span class="hljs-property">amd</span>?<span class="hljs-title function_">define</span>([],<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">return</span> e}):<span class="hljs-string">"object"</span>==<span class="hljs-keyword">typeof</span> <span class="hljs-built_in">exports</span>&amp;&amp;(<span class="hljs-built_in">exports</span>.<span class="hljs-property">Stockfish</span>=e),e}<span class="hljs-keyword">function</span> <span class="hljs-title function_">i</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">if</span>(r.<span class="hljs-title function_">ccall</span>(<span class="hljs-string">"command"</span>,<span class="hljs-literal">null</span>,[<span class="hljs-string">"string"</span>],[e],{<span class="hljs-attr">async</span>:<span class="hljs-string">"undefined"</span>!=<span class="hljs-keyword">typeof</span> <span class="hljs-variable constant_">IS_ASYNCIFY</span>&amp;&amp;<span class="hljs-regexp">/^go\b/</span>.<span class="hljs-title function_">test</span>(e)}),<span class="hljs-string">"quit"</span>===e){<span class="hljs-keyword">try</span>{r.<span class="hljs-title function_">terminate</span>()}<span class="hljs-keyword">catch</span>(e){}<span class="hljs-keyword">try</span>{self.<span class="hljs-title function_">close</span>()}<span class="hljs-keyword">catch</span>(e){}<span class="hljs-keyword">try</span>{process.<span class="hljs-title function_">exit</span>()}<span class="hljs-keyword">catch</span>(e){}}}<span class="hljs-keyword">function</span> <span class="hljs-title function_">c</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">for</span>(;n.<span class="hljs-property">length</span>&amp;&amp;(!r.<span class="hljs-property">_isSearching</span>||!r.<span class="hljs-title function_">_isSearching</span>());)<span class="hljs-title function_">i</span>(n.<span class="hljs-title function_">shift</span>())}<span class="hljs-keyword">function</span> <span class="hljs-title function_">f</span>(<span class="hljs-params">e</span>){<span class="hljs-string">"go"</span>===(e=e.<span class="hljs-title function_">trim</span>()).<span class="hljs-title function_">substring</span>(<span class="hljs-number">0</span>,<span class="hljs-number">2</span>)||<span class="hljs-string">"setoption"</span>===e.<span class="hljs-title function_">substring</span>(<span class="hljs-number">0</span>,<span class="hljs-number">9</span>)?n.<span class="hljs-title function_">push</span>(e):<span class="hljs-title function_">i</span>(e),<span class="hljs-title function_">c</span>()}<span class="hljs-keyword">function</span> <span class="hljs-title function_">l</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">if</span>(r.<span class="hljs-property">_isReady</span>&amp;&amp;!r.<span class="hljs-title function_">_isReady</span>())<span class="hljs-keyword">return</span> <span class="hljs-built_in">setTimeout</span>(l,<span class="hljs-number">10</span>);<span class="hljs-keyword">var</span> t;<span class="hljs-string">"undefined"</span>==<span class="hljs-keyword">typeof</span> <span class="hljs-variable constant_">IS_ASYNCIFY</span>?r.<span class="hljs-property">onDoneSearching</span>=<span class="hljs-attr">c</span>:r.<span class="hljs-property">onDoneSearching</span>=<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-built_in">setTimeout</span>(c,<span class="hljs-number">1</span>)},r.<span class="hljs-property">processCommand</span>=f,o.<span class="hljs-property">length</span>&amp;&amp;(t=<span class="hljs-number">0</span>,<span class="hljs-keyword">function</span> <span class="hljs-title function_">e</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> n;t&lt;o.<span class="hljs-property">length</span>;){<span class="hljs-keyword">if</span>((n=o[t++]).<span class="hljs-title function_">startsWith</span>(<span class="hljs-string">"sleep "</span>))<span class="hljs-keyword">return</span> <span class="hljs-built_in">setTimeout</span>(e,n.<span class="hljs-title function_">slice</span>(<span class="hljs-number">6</span>));<span class="hljs-title function_">f</span>(n)}}())}<span class="hljs-keyword">function</span> <span class="hljs-title function_">p</span>(<span class="hljs-params">t</span>){<span class="hljs-keyword">var</span> e,r=<span class="hljs-number">0</span>,o=[],n=a.<span class="hljs-title function_">slice</span>(<span class="hljs-number">1</span>+(a.<span class="hljs-title function_">lastIndexOf</span>(<span class="hljs-string">"."</span>)-<span class="hljs-number">1</span>&gt;&gt;&gt;<span class="hljs-number">0</span>)),i=a.<span class="hljs-title function_">slice</span>(<span class="hljs-number">0</span>,-n.<span class="hljs-property">length</span>);<span class="hljs-keyword">for</span>(e=<span class="hljs-number">0</span>;e&lt;t;++e)!<span class="hljs-keyword">function</span>(<span class="hljs-params">e,n</span>){<span class="hljs-title function_">fetch</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Request</span>(e)).<span class="hljs-title function_">then</span>(<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">return</span> e.<span class="hljs-title function_">blob</span>()}).<span class="hljs-title function_">then</span>(<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-title function_">n</span>(e)})}(i+<span class="hljs-string">"-part-"</span>+e+n,<span class="hljs-keyword">function</span>(<span class="hljs-params">n</span>){<span class="hljs-keyword">return</span> <span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){++r,o[n]=e,r===t&amp;&amp;(e=<span class="hljs-variable constant_">URL</span>.<span class="hljs-title function_">createObjectURL</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Blob</span>(o,{<span class="hljs-attr">type</span>:<span class="hljs-string">"application/wasm"</span>})),<span class="hljs-title function_">u</span>(e))}}(e))}<span class="hljs-string">"undefined"</span>!=<span class="hljs-keyword">typeof</span> self&amp;&amp;<span class="hljs-string">"worker"</span>===self.<span class="hljs-property">location</span>.<span class="hljs-property">hash</span>.<span class="hljs-title function_">split</span>(<span class="hljs-string">","</span>)[<span class="hljs-number">1</span>]||<span class="hljs-string">"undefined"</span>!=<span class="hljs-keyword">typeof</span> <span class="hljs-variable language_">global</span>&amp;&amp;<span class="hljs-string">"[object process]"</span>===<span class="hljs-title class_">Object</span>.<span class="hljs-property"><span class="hljs-keyword">prototype</span></span>.<span class="hljs-property">toString</span>.<span class="hljs-title function_">call</span>(<span class="hljs-variable language_">global</span>.<span class="hljs-property">process</span>)&amp;&amp;!<span class="hljs-built_in">require</span>(<span class="hljs-string">"worker_threads"</span>).<span class="hljs-property">isMainThread</span>||(<span class="hljs-string">"undefined"</span>!=<span class="hljs-keyword">typeof</span> onmessage&amp;&amp;(<span class="hljs-string">"undefined"</span>==<span class="hljs-keyword">typeof</span> <span class="hljs-variable language_">window</span>||<span class="hljs-keyword">void</span> <span class="hljs-number">0</span>===<span class="hljs-variable language_">window</span>.<span class="hljs-property">document</span>)||<span class="hljs-string">"undefined"</span>!=<span class="hljs-keyword">typeof</span> <span class="hljs-variable language_">global</span>&amp;&amp;<span class="hljs-string">"[object process]"</span>===<span class="hljs-title class_">Object</span>.<span class="hljs-property"><span class="hljs-keyword">prototype</span></span>.<span class="hljs-property">toString</span>.<span class="hljs-title function_">call</span>(<span class="hljs-variable language_">global</span>.<span class="hljs-property">process</span>)?(e=<span class="hljs-string">"undefined"</span>!=<span class="hljs-keyword">typeof</span> <span class="hljs-variable language_">global</span>&amp;&amp;<span class="hljs-string">"[object process]"</span>===<span class="hljs-title class_">Object</span>.<span class="hljs-property"><span class="hljs-keyword">prototype</span></span>.<span class="hljs-property">toString</span>.<span class="hljs-title function_">call</span>(<span class="hljs-variable language_">global</span>.<span class="hljs-property">process</span>),r={},o=[],n=[],e?<span class="hljs-built_in">require</span>.<span class="hljs-property">main</span>===<span class="hljs-variable language_">module</span>?(s=<span class="hljs-built_in">require</span>(<span class="hljs-string">"path"</span>),a=s.<span class="hljs-title function_">join</span>(__dirname,s.<span class="hljs-title function_">basename</span>(__filename,s.<span class="hljs-title function_">extname</span>(__filename))+<span class="hljs-string">".wasm"</span>),r={<span class="hljs-attr">locateFile</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">return</span>-<span class="hljs-number">1</span>&lt;e.<span class="hljs-title function_">indexOf</span>(<span class="hljs-string">".wasm"</span>)?-<span class="hljs-number">1</span>&lt;e.<span class="hljs-title function_">indexOf</span>(<span class="hljs-string">".wasm.map"</span>)?a+<span class="hljs-string">".map"</span>:<span class="hljs-attr">a</span>:__filename},<span class="hljs-attr">listener</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){process.<span class="hljs-property">stdout</span>.<span class="hljs-title function_">write</span>(e+<span class="hljs-string">"\n"</span>)}},<span class="hljs-string">"number"</span>==<span class="hljs-keyword">typeof</span> enginePartsCount&amp;&amp;(r.<span class="hljs-property">wasmBinary</span>=<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> n=<span class="hljs-built_in">require</span>(<span class="hljs-string">"fs"</span>),t=s.<span class="hljs-title function_">extname</span>(a),r=a.<span class="hljs-title function_">slice</span>(<span class="hljs-number">0</span>,-t.<span class="hljs-property">length</span>),o=[],i=<span class="hljs-number">0</span>;i&lt;e;++i)o.<span class="hljs-title function_">push</span>(n.<span class="hljs-title function_">readFileSync</span>(r+<span class="hljs-string">"-part-"</span>+i+<span class="hljs-string">".wasm"</span>));<span class="hljs-keyword">return</span> <span class="hljs-title class_">Buffer</span>.<span class="hljs-title function_">concat</span>(o)}(enginePartsCount)),o=process.<span class="hljs-property">argv</span>.<span class="hljs-title function_">slice</span>(<span class="hljs-number">2</span>),<span class="hljs-title function_">t</span>()(r).<span class="hljs-title function_">then</span>(l),<span class="hljs-built_in">require</span>(<span class="hljs-string">"readline"</span>).<span class="hljs-title function_">createInterface</span>({<span class="hljs-attr">input</span>:process.<span class="hljs-property">stdin</span>,<span class="hljs-attr">output</span>:process.<span class="hljs-property">stdout</span>,<span class="hljs-attr">completer</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">n</span>){<span class="hljs-keyword">var</span> e=[<span class="hljs-string">"binc "</span>,<span class="hljs-string">"btime "</span>,<span class="hljs-string">"confidence "</span>,<span class="hljs-string">"depth "</span>,<span class="hljs-string">"infinite "</span>,<span class="hljs-string">"mate "</span>,<span class="hljs-string">"maxdepth "</span>,<span class="hljs-string">"maxtime "</span>,<span class="hljs-string">"mindepth "</span>,<span class="hljs-string">"mintime "</span>,<span class="hljs-string">"moves "</span>,<span class="hljs-string">"movestogo "</span>,<span class="hljs-string">"movetime "</span>,<span class="hljs-string">"ponder "</span>,<span class="hljs-string">"searchmoves "</span>,<span class="hljs-string">"shallow "</span>,<span class="hljs-string">"winc "</span>,<span class="hljs-string">"wtime "</span>];<span class="hljs-keyword">function</span> <span class="hljs-title function_">t</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">return</span> <span class="hljs-number">0</span>===e.<span class="hljs-title function_">toLowerCase</span>().<span class="hljs-title function_">indexOf</span>(n.<span class="hljs-title function_">toLowerCase</span>())}<span class="hljs-keyword">var</span> r=[<span class="hljs-string">"compiler"</span>,<span class="hljs-string">"d"</span>,<span class="hljs-string">"eval"</span>,<span class="hljs-string">"flip"</span>,<span class="hljs-string">"go "</span>,<span class="hljs-string">"isready"</span>,<span class="hljs-string">"ponderhit"</span>,<span class="hljs-string">"position fen "</span>,<span class="hljs-string">"position startpos"</span>,<span class="hljs-string">"position startpos moves "</span>,<span class="hljs-string">"quit"</span>,<span class="hljs-string">"setoption name Clear Hash value true"</span>,<span class="hljs-string">"setoption name Hash value "</span>,<span class="hljs-string">"setoption name Minimum Thinking Time value "</span>,<span class="hljs-string">"setoption name Move Overhead value "</span>,<span class="hljs-string">"setoption name MultiPV value "</span>,<span class="hljs-string">"setoption name Ponder value "</span>,<span class="hljs-string">"setoption name Skill Level value "</span>,<span class="hljs-string">"setoption name Slow Mover value "</span>,<span class="hljs-string">"setoption name Threads value "</span>,<span class="hljs-string">"setoption name UCI_Chess960 value false"</span>,<span class="hljs-string">"setoption name UCI_Chess960 value true"</span>,<span class="hljs-string">"setoption name UCI_LimitStrength value true"</span>,<span class="hljs-string">"setoption name UCI_LimitStrength value false"</span>,<span class="hljs-string">"setoption name UCI_Elo value "</span>,<span class="hljs-string">"setoption name UCI_ShowWDL value true"</span>,<span class="hljs-string">"setoption name UCI_ShowWDL value false"</span>,<span class="hljs-string">"setoption name nodestime value "</span>,<span class="hljs-string">"stop"</span>,<span class="hljs-string">"uci"</span>,<span class="hljs-string">"ucinewgame"</span>].<span class="hljs-title function_">filter</span>(t);<span class="hljs-keyword">return</span>[r=r.<span class="hljs-property">length</span>?<span class="hljs-attr">r</span>:(n=n.<span class="hljs-title function_">replace</span>(<span class="hljs-regexp">/^.*\s/</span>,<span class="hljs-string">""</span>))?e.<span class="hljs-title function_">filter</span>(t):e,n]},<span class="hljs-attr">historySize</span>:<span class="hljs-number">100</span>}).<span class="hljs-title function_">on</span>(<span class="hljs-string">"line"</span>,<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){e&amp;&amp;(r.<span class="hljs-property">processCommand</span>?r.<span class="hljs-title function_">processCommand</span>(e):o.<span class="hljs-title function_">push</span>(e),<span class="hljs-string">"quit"</span>===e)&amp;&amp;process.<span class="hljs-title function_">exit</span>()}).<span class="hljs-title function_">on</span>(<span class="hljs-string">"close"</span>,<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){process.<span class="hljs-title function_">exit</span>()}).<span class="hljs-title function_">setPrompt</span>(<span class="hljs-string">""</span>)):<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span>=<span class="hljs-attr">t</span>:(e=self.<span class="hljs-property">location</span>.<span class="hljs-property">hash</span>.<span class="hljs-title function_">substr</span>(<span class="hljs-number">1</span>).<span class="hljs-title function_">split</span>(<span class="hljs-string">","</span>),a=<span class="hljs-built_in">decodeURIComponent</span>(e[<span class="hljs-number">0</span>]||location.<span class="hljs-property">origin</span>+location.<span class="hljs-property">pathname</span>.<span class="hljs-title function_">replace</span>(<span class="hljs-regexp">/\.js$/i</span>,<span class="hljs-string">".wasm"</span>)),u=<span class="hljs-keyword">function</span>(<span class="hljs-params">n</span>){r={<span class="hljs-attr">locateFile</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">return</span>-<span class="hljs-number">1</span>&lt;e.<span class="hljs-title function_">indexOf</span>(<span class="hljs-string">".wasm"</span>)?-<span class="hljs-number">1</span>&lt;e.<span class="hljs-title function_">indexOf</span>(<span class="hljs-string">".wasm.map"</span>)?a+<span class="hljs-string">".map"</span>:n||<span class="hljs-attr">a</span>:self.<span class="hljs-property">location</span>.<span class="hljs-property">origin</span>+self.<span class="hljs-property">location</span>.<span class="hljs-property">pathname</span>+<span class="hljs-string">"#"</span>+a+<span class="hljs-string">",worker"</span>},<span class="hljs-attr">listener</span>:<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-title function_">postMessage</span>(e)}},<span class="hljs-title function_">t</span>()(r).<span class="hljs-title function_">then</span>(l).<span class="hljs-title function_">catch</span>(<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-built_in">setTimeout</span>(<span class="hljs-keyword">function</span>(<span class="hljs-params"></span>){<span class="hljs-keyword">throw</span> e},<span class="hljs-number">1</span>)})},<span class="hljs-string">"number"</span>==<span class="hljs-keyword">typeof</span> enginePartsCount?<span class="hljs-title function_">p</span>(enginePartsCount):<span class="hljs-title function_">u</span>(),onmessage=onmessage||<span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){<span class="hljs-keyword">if</span>(r.<span class="hljs-property">processCommand</span>?r.<span class="hljs-title function_">processCommand</span>(e.<span class="hljs-property">data</span>):o.<span class="hljs-title function_">push</span>(e.<span class="hljs-property">data</span>),<span class="hljs-string">"quit"</span>===e.<span class="hljs-property">data</span>)<span class="hljs-keyword">try</span>{self.<span class="hljs-title function_">close</span>()}<span class="hljs-keyword">catch</span>(e){}})):<span class="hljs-string">"object"</span>==<span class="hljs-keyword">typeof</span> <span class="hljs-variable language_">document</span>&amp;&amp;<span class="hljs-variable language_">document</span>.<span class="hljs-property">currentScript</span>?<span class="hljs-variable language_">document</span>.<span class="hljs-property">currentScript</span>.<span class="hljs-property">_exports</span>=<span class="hljs-title function_">t</span>():<span class="hljs-title function_">t</span>())}();</div></div></div></main><div id="undetectable-ai-panel-shadow-host"><template shadowrootmode="open"><style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

      /* Reset all inherited styles */
      :host {
        all: initial;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 99999;
        pointer-events: none;
      }

      /* Allow interactions with the panel itself */
      #undetectable-ai-panel {
        pointer-events: auto;
      }

      /* Import the compiled CSS styles for components */
      
    /* Base reset for specific elements only - not all elements */
    #undetectable-ai-panel {
      box-sizing: border-box;
      font-family: "Inter", sans-serif;
    }

    #undetectable-ai-panel *,
    #undetectable-ai-panel *::before,
    #undetectable-ai-panel *::after {
      box-sizing: border-box;
      font-family: "Inter", sans-serif;
    }

    /* Reset only specific elements that need it */
    // #undetectable-ai-panel h1,
    // #undetectable-ai-panel h2,
    // #undetectable-ai-panel h3,
    // #undetectable-ai-panel p {
    //   margin: 0;
    //   padding: 0;
    // }

    #undetectable-ai-panel {
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: min(360px, 90vw);
      max-width: 360px;
      min-width: 280px;
      background: white;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      font-family: "Inter", sans-serif;
      transition: transform 0.3s ease;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      /* The inner content area handles scrolling; keep the container non-scrolling
         so overlay controls (e.g., resize handles) stay pinned at the bottom */
      overflow-y: hidden;
      overflow-x: hidden;
      color: #000;
      /* Ensure light UI regardless of host site theme (e.g., GitHub dark) */
      color-scheme: light;
      // font-size: 14px;
      line-height: 1.5;
      /* Support for draggable positioning */
      z-index: 99999;
    }

    /* Header drag styling */
    .ud-header {
      cursor: grab;
      user-select: none;
    }

    .ud-header:active {
      cursor: grabbing;
    }

    .ud-header.dragging {
      cursor: grabbing;
    }

    /* Resize handles styling */
    .resize-handle {
      position: absolute;
      background: transparent;
      transition: background-color 0.2s ease;
    }

    .resize-handle:hover {
      background: rgba(0, 123, 255, 0.1);
    }

    .resize-handle-bottom-left,
    .resize-handle-bottom-right {
      bottom: 0;
      width: 20px;
      height: 20px;
      cursor: ns-resize;
      z-index: 1000; /* Very high z-index to ensure always visible above sidebar */
    }

    .resize-handle-bottom-left {
      left: 0;
      border-bottom-left-radius: 8px;
    }

    .resize-handle-bottom-right {
      right: 0;
      border-bottom-right-radius: 8px;
    }

    .resize-handle-bottom-left::after,
    .resize-handle-bottom-right::after {
      content: '';
      position: absolute;
      bottom: 4px;
      width: 12px;
      height: 3px;
      background: #ccc;
      border-radius: 1px;
    }

    .resize-handle-bottom-left::after {
      left: 4px;
    }

    .resize-handle-bottom-right::after {
      right: 4px;
    }

    /* Ensure resize handles are always visible and functional */
    .resize-handle-bottom-left::after,
    .resize-handle-bottom-right::after {
      opacity: 0.8;
      transition: opacity 0.2s ease;
    }

    .resize-handle:hover::after {
      background: #007bff;
      opacity: 1;
    }

    #undetectable-ai-panel.hidden {
      transform: translateX(100%) !important;
      visibility: hidden !important;
      pointer-events: none !important;
    }

    #undetectable-ai-panel.visible {
      transform: translateX(0) !important;
      visibility: visible !important;
      pointer-events: auto !important;
    }

    /* Suppress child transitions/animations while closing to prevent flicker */
    #undetectable-ai-panel.closing * {
      transition: none !important;
      animation: none !important;
    }

    /* All the component styles from the compiled CSS */
    .ud-header {
      color: #000;
      background-color: #fff;
      border-bottom: 1px solid #e2e8f0;
      flex-shrink: 0;
      padding: 1rem;
    }

    .ud-header-container {
      justify-content: space-between;
      align-items: center;
      width: 100%;
      min-width: 0;
      display: flex;
    }

    .ud-logo-container {
      flex-shrink: 0;
      align-items: center;
      display: flex;
    }

    .ud-buttons-container {
      flex-shrink: 0;
      gap: 0;
      display: flex;
    }

    .ud-button {
      cursor: pointer;
      color: #000;
      background: none;
      border: none;
      border-radius: .5rem;
      justify-content: center;
      align-items: center;
      min-width: 32px;
      min-height: 32px;
      padding: .25rem;
      display: flex;
    }

    .ud-button:hover {
      background-color: #0000000d;
    }

    /* Loading component styles */
    .loading-container {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      display: flex;
    }

    .loading-spinner {
      border: 4px solid #e2e8f0;
      border-top-color: currentColor;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: 1s linear infinite spin;
    }

    .loading-text {
      color: #020617;
      margin-top: 20px;
      font-size: 20px;
      font-weight: 500;
    }

    @keyframes spin {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    /* Action buttons styles */
    // .action-buttons-main-container {
    //   -webkit-user-select: none;
    //   user-select: none;
    //   color: #000;
    //   flex-direction: column;
    //   justify-content: space-between;
    //   height: 100%;
    //   display: flex;
    // }

    .action-buttons-container {
      // padding: 0px 20px;
      //   position: fixed;
      //   bottom: 0;
      //   left: 0;
      //   right: 0;
    }

    .action-button {
      color: #000;
      border-radius: 8px;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 12px;
      font-size: 16px;
      font-weight: 500;
      display: flex;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .check-ai-button {
      color: #18181b;
      background-color: #fff;
      border: 1px solid #e5e7eb;
      margin-bottom: 10px;
    }

    .check-ai-button:hover:not(:disabled) {
      background-color: #f9fafb;
    }

    .humanize-button {
      color: #fff !important;
      background-color: #16a348 !important;
      border: none;
    }

    .humanize-button:hover:not(:disabled) {
      background-color: #15803d !important;
    }

    .paraphrase-button {
      color: #18181b;
      background-color: #fff;
      border: 1px solid #e5e7eb;
      margin-bottom: 10px;
      margin-top: 10px;
    }

    .paraphrase-button:hover:not(:disabled) {
      background-color: #f9fafb;
    }

    .button-icon {
      margin-right: 8px;
      width: 20px;
      height: 20px;
      display: inline-block;
      vertical-align: middle;
      flex-shrink: 0;
    }

    /* Ensure button icon images display properly */
    #undetectable-ai-panel .action-button img {
      width: 20px;
      height: 20px;
      margin-right: 8px;
      display: inline-block;
      vertical-align: middle;
      flex-shrink: 0;
    }

    /* Disabled states */
    .action-button:disabled {
      cursor: not-allowed;
      opacity: 0.7;
    }

    .action-button:enabled {
      cursor: pointer;
      opacity: 1;
    }

    /* Detection results styles */
    .detection-results-container {
      -webkit-user-select: none;
      user-select: none;
      color: #18181b;
      flex-direction: column;
      height: 100%;
      padding: 20px;
      display: flex;
      overflow-y: auto;
    }

    /*
     * Global scrollbar styling for ALL scrollable elements inside the panel.
     * This prevents host sites (e.g., GitHub) from imposing dark scrollbars
     * and ensures consistent white scrollbars for guest and logged-in views.
     */
    #undetectable-ai-panel,
    #undetectable-ai-panel *:not(.hidden-scrollbar) {
      scrollbar-width: thin; /* Firefox */
      scrollbar-color: #d1d5db #f8f9fa; /* thumb track */
    }

    #undetectable-ai-panel::-webkit-scrollbar,
    #undetectable-ai-panel *:not(.hidden-scrollbar)::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    #undetectable-ai-panel::-webkit-scrollbar-track,
    #undetectable-ai-panel *:not(.hidden-scrollbar)::-webkit-scrollbar-track {
      background: #f8f9fa;
      border-radius: 4px;
    }

    #undetectable-ai-panel::-webkit-scrollbar-thumb,
    #undetectable-ai-panel *:not(.hidden-scrollbar)::-webkit-scrollbar-thumb {
      background: #d1d5db;
      border-radius: 4px;
    }

    #undetectable-ai-panel::-webkit-scrollbar-thumb:hover,
    #undetectable-ai-panel *:not(.hidden-scrollbar)::-webkit-scrollbar-thumb:hover {
      background: #9ca3af;
    }

    /* Explicitly hide scrollbars for sidebar scroll containers inside the panel */
    #undetectable-ai-panel .hidden-scrollbar {
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE/Edge */
    }

    #undetectable-ai-panel .hidden-scrollbar::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    .detection-results-title {
      text-align: center;
      color: #242424;
      margin-bottom: 20px;
      font-size: 16px;
      font-weight: 700;
    }

    .detection-results-section {
      margin-bottom: 20px;
    }

    /* Advanced settings styles - COMPLETE VERSION */
    .advanced-settings-container {
      margin-bottom: 20px;
      border-top: 1px solid #CBD5E1;
      padding-top: 10px;
      /* Remove horizontal padding to match original CSS */
    }

    body.docs-gm #undetectable-ai-panel .advanced-settings-container {
      align-self: center;
    }

    .advanced-settings-title {
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      line-height: 100%;
      margin-bottom: 20px;
      color: #18181B;
    }

    .mode-selector-container {
      display: flex;
      border: 1px solid #E4E4E7;
      border-radius: 8px;
      margin-bottom: 20px;
      overflow: hidden;
      cursor: pointer;
      background-color: #F3F4F6; /* Add light background to match screenshot */
    }

    .mode-selector-basic {
      height: 40px;
      width: 151px;
      text-align: center;
      display: flex;
      background-color: transparent;
      border-radius: 8px 0 0 8px;
      align-items: center;
      justify-content: center;
      color: #18181B;
      font-weight: 500;
      // font-size: 14px;
      transition: background-color 0.3s ease;
      cursor: pointer;
    }

    .mode-selector-basic.active {
      background-color: #E2E8F0;
    }

    .mode-selector-undetectable {
      height: 40px;
      width: 170px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      // font-size: 14px;
      color: #18181B;
      transition: background-color 0.3s ease;
      cursor: pointer;
      gap: 4px; /* Add gap for lock icon spacing */
    }

    .mode-selector-undetectable.active {
      background-color: #E2E8F0;
    }

    .select-container {
      position: relative;
      width: 170px;
    }

    .settings-select {
      border: 1px solid #E4E4E7;
      border-radius: 6px;
      height: 40px;
      padding: 0px 15px;
      padding-right: 35px; /* Add space for arrow */
      width: 100%;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      cursor: pointer;
      background-color: white;
      outline: none;
      color: #18181B;
      font-weight: 400;
      font-family: "Inter", sans-serif;
      font-size: 16px;
    }

    .select-arrow {
      position: absolute;
      top: 50%;
      right: 15px;
      transform: translateY(-50%);
      pointer-events: none;
      color: #18181B; /* Changed from #64748B to match original */
    }

    .document-id-container {
      text-align: center;
      font-size: 14px;
      color: #64748b;
      margin-top: 30px;
      margin-bottom: 30px;
    }

    .lock-icon {
      margin-right: 8px;
      width: 16px;
      height: 16px;
      display: inline-block;
      vertical-align: middle;
    }

    .settings-field-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
      gap: 16px; /* Add gap for proper spacing */
    }

    .settings-field-label-container {
      display: flex;
      align-items: center;
    }

    .settings-field-label {
      font-weight: 500;
      margin-right: 10px;
      color: #18181B;
      font-family: "Inter", sans-serif;
      // font-size: 14px;
    }

    .tooltip-container {
      position: relative;
      display: inline-block;
    }

    .tooltip-icon {
      cursor: pointer;
      width: 16px;
      height: 16px;
      display: block;
    }

    .tooltip-box {
      display: none; /* Hide tooltips by default */
      padding: 10px 15px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      width: 265px;
      background-color: white;
      border: 1px solid #e0e0e0;
      position: absolute;
      top: -110px;
      z-index: 10;
      left: -80px;
      height: 91px;
      margin: 15px;
      color: #020617;
    }

    /* Show tooltips on hover */
    .tooltip-container:hover .tooltip-box {
      display: block;
    }

    .tooltip-title {
      font-size: 14px;
      font-weight: 700;
      color: #020617;
    }

    .tooltip-description {
      color: #020617;
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      margin-top: 4px !important;
      display: block;
    }

    .tooltip-list {
      width: 265px;
      margin-top: 12px;
    }

    .tooltip-list-item {
      color: #020617;
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      display: block;
      /* margin-bottom: 12px; */
      width: 215px;
      margin-top: 0;
    }

    .tooltip-div {
      display: flex;
      align-items: flex-start;
    }

    .tooltip-dot {
      margin-right: 5px;
      font-size: 14px;
      line-height: 18px;
      position: relative;
      top: 0px;
    }

    /* Style for the bold text */
    .tooltip-list-item b {
      font-weight: 600;
    }

    .tooltip-box-large {
      height: 212px;
      bottom: 5px;
      top: auto;
    }

    /* Add the loading state styles to the existing CSS file */

    .advanced-settings-container.loading {
      position: relative;
      pointer-events: none;
      opacity: 0.7;
    }

    .settings-loading-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(255, 255, 255, 0.5);
      z-index: 10;
    }

    .settings-loading-spinner {
      width: 30px;
      height: 30px;
      border: 3px solid rgba(0, 0, 0, 0.1);
      border-radius: 50%;
      border-top-color: #007bff;
      animation: spin 1s ease-in-out infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    /* Processing status styles */
    .processing-status-container {
      border-radius: 8px;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      margin: 50px 0;
      padding: 20px;
      display: flex;
      flex-direction: column;
    }

    .processing-status-header {
      align-items: center;
      margin-bottom: 12px;
      display: flex;
    }

    .processing-status-title {
      margin-left: 8px;
      font-weight: 500;
    }

    .processing-status-message {
      color: #64748b;
      text-align: center;
      font-size: 14px;
    }

    /* Error message styles */
    .error-message {
      color: #ef4444;
      text-align: center;
      background-color: #ef44441a;
      border-radius: 8px;
      margin-top: 16px;
      margin-bottom: 16px;
      padding: 10px;
      font-size: 14px;
    }

    /* Credits container styles */
    .credits-container {
      width: 100%;
      margin-top: 10px;
    }

    /* Form input styles */
    #undetectable-ai-panel input,
    #undetectable-ai-panel textarea {
      font-family: "Inter", sans-serif;
      font-size: 14px;
      padding: 0.5rem;
      border: 1px solid #e5e7eb;
      border-radius: 0.375rem;
      width: 100%;
      background: white;
      color: #000;
    }

    #undetectable-ai-panel input:focus,
    #undetectable-ai-panel textarea:focus {
      outline: none;
      border-color: #22C55E;
    }

    /* Button styles */
    // #undetectable-ai-panel button {
    //   font-family: "Inter", sans-serif;
    //   cursor: pointer;
    //   border: none;
    //   background: none;
    //   // padding: 0.5rem 1rem;
    //   border-radius: 0.375rem;
    //   font-size: 14px;
    //   transition: all 0.2s ease;
    // }

    /* Primary button styles */
    #undetectable-ai-panel button[type="submit"],
    #undetectable-ai-panel .primary-button {
      background-color: #22C55E;
      color: white;
      border: none;
      border-radius: 0.375rem;
      padding: 0.75rem 1rem;
      font-weight: 500;
      cursor: pointer;
      width: 100%;
    }

    #undetectable-ai-panel button[type="submit"]:hover,
    #undetectable-ai-panel .primary-button:hover {
      background-color: #16a34a;
    }

    /* Disabled button states */
    button:disabled {
      cursor: not-allowed;
      opacity: .7;
    }

    button:enabled {
      cursor: pointer;
      opacity: 1;
    }

    /* Ensure selects inherit font properly */
    #undetectable-ai-panel select {
      font-family: "Inter", sans-serif;
      // font-size: 14px;
      color: #18181b;
    }

    /* Ensure all images in the panel load correctly */
    // #undetectable-ai-panel img {
    //   max-width: 100%;
    //   height: auto;
    //   display: block;
    // }

    /* Other Detectors specific styles */
    div[style*="position: relative"][style*="display: inline-block"]:hover .tooltip-text {
      display: block !important;
    }

    div[style*="position: relative"][style*="display: inline-block"]:hover .tooltip-box {
      display: block !important;
    }

    /* SVG arrow styles for select dropdowns */
    .select-arrow svg {
      width: 16px;
      height: 16px;
      display: block;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
    }

    /* Responsive styles */
    @media (max-height: 600px) {
      #undetectable-ai-panel .content-container {
        justify-content: flex-start;
        overflow-y: auto;
      }
    }

    @media (max-width: 400px) {
      #undetectable-ai-panel {
        width: 95vw;
        min-width: 250px;
      }
      .ud-header {
        padding: .75rem;
      }
      .ud-button {
        min-width: 28px;
        min-height: 28px;
        padding: .125rem;
      }
    }
  

      /* SVG Icons as Data URIs for Shadow DOM */
      .tooltip-icon {
        background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxOCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgMTZDNi4xMjUgMTYgMy41IDE0LjUgMi4wNjI1IDEyQzAuNjI1IDkuNTMxMjUgMC42MjUgNi41IDIuMDYyNSA0QzMuNSAxLjUzMTI1IDYuMTI1IDAgOSAwQzExLjg0MzggMCAxNC40Njg4IDEuNTMxMjUgMTUuOTA2MiA0QzE3LjM0MzggNi41IDE3LjM0MzggOS41MzEyNSAxNS45MDYyIDEyQzE0LjQ2ODggMTQuNSAxMS44NDM4IDE2IDkgMTZaTTYuMjgxMjUgNS4xODc1VjUuMjE4NzVDNi4xNTYyNSA1LjU5Mzc1IDYuMzQzNzUgNi4wMzEyNSA2Ljc1IDYuMTg3NUM3LjEyNSA2LjMxMjUgNy41NjI1IDYuMTI1IDcuNjg3NSA1LjcxODc1TDcuNzE4NzUgNS42ODc1QzcuNzUgNS41OTM3NSA3Ljg0Mzc1IDUuNTMxMjUgNy45Mzc1IDUuNTMxMjVIOS43NUMxMC4wMzEyIDUuNTMxMjUgMTAuMjUgNS43MTg3NSAxMC4yNSA2QzEwLjI1IDYuMTU2MjUgMTAuMTU2MiA2LjMxMjUgMTAgNi40MDYyNUw4LjYyNSA3LjE4NzVDOC4zNzUgNy4zMTI1IDguMjUgNy41NjI1IDguMjUgNy44NDM3NVY4LjI1QzguMjUgOC42ODc1IDguNTYyNSA5IDkgOUM5LjQwNjI1IDkgOS43MTg3NSA4LjY4NzUgOS43NSA4LjI4MTI1TDEwLjc1IDcuNjg3NUMxMS4zNDM4IDcuMzQzNzUgMTEuNzUgNi42ODc1IDExLjc1IDZDMTEuNzUgNC45MDYyNSAxMC44NDM4IDQgOS43NSA0SDcuOTM3NUM3LjE4NzUgNCA2LjUzMTI1IDQuNDY4NzUgNi4yODEyNSA1LjE4NzVaTTggMTFDOCAxMS41NjI1IDguNDM3NSAxMiA5IDEyQzkuNTMxMjUgMTIgMTAgMTEuNTYyNSAxMCAxMUMxMCAxMC40Njg4IDkuNTMxMjUgMTAgOSAxMEM4LjQzNzUgMTAgOCAxMC40Njg4IDggMTFaIiBmaWxsPSIjOTRBM0I4Ii8+Cjwvc3ZnPg==') !important;
        background-size: contain !important;
        background-repeat: no-repeat !important;
        background-position: center !important;
        width: 16px !important;
        height: 16px !important;
        cursor: pointer !important;
      }

      .tooltip-icon img {
        // display: none !important;
      }

      .lock-icon {
        background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNSA0LjVWNkgxMC41VjQuNUMxMC41IDMuMTI1IDkuMzc1IDIgOCAyQzYuNTkzNzUgMiA1LjUgMy4xMjUgNS41IDQuNVpNMy41IDZWNC41QzMuNSAyLjAzMTI1IDUuNSAwIDggMEMxMC40Njg4IDAgMTIuNSAyLjAzMTI1IDEyLjUgNC41VjZIMTNDMTQuMDkzOCA2IDE1IDYuOTA2MjUgMTUgOFYxNEMxNSAxNS4xMjUgMTQuMDkzOCAxNiAxMyAxNkgzQzEuODc1IDE2IDEgMTUuMTI1IDEgMTRWOEMxIDYuOTA2MjUgMS44NzUgNiAzIDZIMy41WiIgZmlsbD0iI0VBQjMwOCIvPgo8L3N2Zz4=') !important;
        background-size: contain !important;
        background-repeat: no-repeat !important;
        background-position: center !important;
        width: 16px !important;
        height: 16px !important;
        display: inline-block !important;
        margin-right: 8px !important;
      }

      .lock-icon img {
        display: none !important;
      }
    </style><div id="undetectable-ai-panel" class="hidden"><div class="ud-header  " role="banner" style="cursor: default; user-select: none; position: sticky; top: 0px; z-index: 1001; flex-shrink: 0;"><div class="ud-header-container " role="button" tabindex="0"><div class="ud-logo-container"><img src="chrome-extension://gbeiplkijfihbcieiihmeemjejohbiho/UD-logo.c17a2685.svg" alt="UD Logo"></div><div class="ud-buttons-container"><button class="ud-button" aria-label="Settings"><img src="chrome-extension://gbeiplkijfihbcieiihmeemjejohbiho/settings.24ae45fc.svg" alt="Settings"></button><button class="ud-button" aria-label="Enable drag mode"><img src="chrome-extension://gbeiplkijfihbcieiihmeemjejohbiho/drag-mode.79c26e03.svg" alt="Docked Mode" style="width: 20px; height: 20px;"></button><button class="ud-button" aria-label="Close"><img src="chrome-extension://gbeiplkijfihbcieiihmeemjejohbiho/close.d9886ae5.svg" alt="Close"></button></div></div></div><div class="resize-handle resize-handle-bottom-left" role="button" tabindex="0" style="position: absolute; bottom: 0px; left: 0px; width: 20px; height: 20px; cursor: ns-resize; z-index: 2147483646;"></div><div class="resize-handle resize-handle-bottom-right" role="button" tabindex="0" style="position: absolute; bottom: 0px; right: 0px; width: 20px; height: 20px; cursor: ns-resize; z-index: 2147483646;"></div><div style="flex: 1 1 0%; overflow-y: auto; min-height: 0px; display: flex; flex-direction: column;"><div data-component="MainActions" style="height: 100%; position: relative; width: 100%;"><div data-component="MainActions" style="height: 100%; display: flex; flex-direction: column; background-color: rgb(255, 255, 255); user-select: none; position: relative; overflow: hidden;"><div style="flex: 1 1 0%; overflow-y: auto; min-height: 0px; display: flex; flex-direction: column;"><div style="flex: 1 1 0%;"><div role="button" tabindex="0" style="padding: 15px 20px; display: flex; align-items: center; cursor: pointer; position: relative;"><div style="width: 50px; height: 50px; flex-shrink: 0; display: flex; align-items: center; justify-content: center;"><img src="chrome-extension://gbeiplkijfihbcieiihmeemjejohbiho/ai-detector.1cfd5b1a.svg" alt="AI Detector" width="50" height="50" style="flex-shrink: 0;"></div><div style="display: flex; flex-direction: column; justify-content: center; margin-left: 15px; flex: 1 1 0%;"><div style="font-size: 18px; font-weight: 600; color: rgb(24, 24, 27); display: flex; align-items: center; justify-content: space-between;">AI Detector</div></div></div><div style="border-bottom: 1px solid rgb(203, 213, 225); width: 100%;"></div><div role="button" tabindex="0" style="padding: 15px 20px; display: flex; align-items: center; cursor: pointer; position: relative;"><img src="chrome-extension://gbeiplkijfihbcieiihmeemjejohbiho/ai-humanizer.9b56170e.svg" alt="AI Humanizer" width="50" height="50" style="flex-shrink: 0;"><div style="display: flex; flex-direction: column; justify-content: center; margin-left: 15px; flex: 1 1 0%;"><div style="font-size: 18px; font-weight: 600; color: rgb(24, 24, 27); display: flex; align-items: center; justify-content: space-between; width: 100%;">AI Humanizer</div></div></div><div style="border-bottom: 1px solid rgb(203, 213, 225); width: 100%;"></div><div role="button" tabindex="0" style="padding: 15px 20px; display: flex; align-items: center; cursor: pointer; position: relative;"><img src="chrome-extension://gbeiplkijfihbcieiihmeemjejohbiho/ask-tool.896d97e3.svg" alt="Ask Tool" width="50" height="50" style="flex-shrink: 0;"><div style="display: flex; flex-direction: column; justify-content: center; margin-left: 15px; flex: 1 1 0%;"><div style="font-size: 18px; font-weight: 600; color: rgb(24, 24, 27); display: flex; align-items: center; justify-content: space-between; width: 100%;">Question Solver</div></div></div><div style="border-bottom: 1px solid rgb(203, 213, 225); width: 100%;"></div><div role="button" tabindex="0" style="padding: 15px 20px; display: flex; align-items: center; cursor: pointer; position: relative;"><img src="chrome-extension://gbeiplkijfihbcieiihmeemjejohbiho/ai-paraphraser-tool.96afd38b.svg" alt="AI Paraphraser" width="50" height="50" style="flex-shrink: 0;"><div style="display: flex; flex-direction: column; justify-content: center; margin-left: 15px; flex: 1 1 0%;"><div style="font-size: 18px; font-weight: 600; color: rgb(24, 24, 27); display: flex; align-items: center; justify-content: space-between; width: 100%;">AI Paraphraser</div></div></div><div style="border-bottom: 1px solid rgb(203, 213, 225); width: 100%;"></div><div role="button" tabindex="0" style="padding: 15px 20px; display: flex; align-items: center; cursor: pointer; position: relative;"><img src="chrome-extension://gbeiplkijfihbcieiihmeemjejohbiho/human-typer.f7df0235.svg" alt="Auto Typer" width="50" height="50" style="flex-shrink: 0;"><div style="display: flex; flex-direction: column; justify-content: center; margin-left: 15px; flex: 1 1 0%;"><div style="font-size: 18px; font-weight: 600; color: rgb(24, 24, 27); display: flex; align-items: center; justify-content: space-between; width: 100%;">Auto Typer</div></div></div><div style="border-bottom: 1px solid rgb(203, 213, 225); width: 100%;"></div><div role="button" tabindex="0" style="padding: 15px 20px; display: flex; align-items: center; cursor: pointer; position: relative;"><img src="chrome-extension://gbeiplkijfihbcieiihmeemjejohbiho/replicate.308869f9.svg" alt="Replicate" width="50" height="50" style="flex-shrink: 0;"><div style="display: flex; flex-direction: column; justify-content: center; margin-left: 15px; flex: 1 1 0%;"><div style="font-size: 18px; font-weight: 600; color: rgb(24, 24, 27); display: flex; align-items: center; justify-content: space-between; width: 100%;">Writing Style Replicator</div></div></div><div style="border-bottom: 1px solid rgb(203, 213, 225); width: 100%;"></div><div role="button" tabindex="0" style="padding: 15px 20px; display: flex; align-items: center; cursor: pointer; position: relative;"><img src="chrome-extension://gbeiplkijfihbcieiihmeemjejohbiho/img-detect.5ebb9a58.svg" alt="AI Detector" width="50" height="50" style="flex-shrink: 0;"><div style="display: flex; flex-direction: column; justify-content: center; margin-left: 15px; flex: 1 1 0%;"><div style="font-size: 18px; font-weight: 600; color: rgb(24, 24, 27); display: flex; align-items: center; justify-content: space-between; width: 100%;">AI Image Detector</div></div></div><div style="border-bottom: 1px solid rgb(203, 213, 225); width: 100%;"></div><div role="button" tabindex="0" style="padding: 15px 20px; display: flex; align-items: center; cursor: pointer; position: relative;"><img src="chrome-extension://gbeiplkijfihbcieiihmeemjejohbiho/aibot.b8d8687a.svg" alt="Chat with Page" width="50" height="50" style="flex-shrink: 0;"><div style="display: flex; flex-direction: column; justify-content: center; margin-left: 15px; flex: 1 1 0%;"><div style="font-size: 18px; font-weight: 600; color: rgb(24, 24, 27); display: flex; align-items: center; justify-content: space-between; width: 100%;">Chat with Page</div></div></div><div style="border-bottom: 1px solid rgb(203, 213, 225); width: 100%;"></div><div role="button" tabindex="0" style="padding: 15px 20px; display: flex; align-items: center; cursor: pointer; position: relative;"><img src="chrome-extension://gbeiplkijfihbcieiihmeemjejohbiho/citation.7a933b37.svg" alt="Citation Generator" width="50" height="50" style="flex-shrink: 0;"><div style="display: flex; flex-direction: column; justify-content: center; margin-left: 15px; flex: 1 1 0%;"><div style="font-size: 18px; font-weight: 600; color: rgb(24, 24, 27); display: flex; align-items: center; justify-content: space-between; width: 100%;">Citation Generator</div></div></div><div style="border-bottom: 1px solid rgb(203, 213, 225); width: 100%;"></div></div><div style="margin-top: auto; padding-top: 16px; align-items: center; justify-content: center; display: flex;"><div style="display: flex; justify-content: space-between; align-items: center; padding: 20px 10px; width: 100%; border-top: 1px solid rgb(229, 231, 235);"><div style="display: flex; flex-direction: column;"><div style="font-size: 14px; font-weight: 600; color: rgb(9, 9, 11); line-height: 1.2;">Remaining Credits</div><div style="font-size: 16px; font-weight: 400; color: rgb(9, 9, 11);">137,875</div></div><button style="background-color: rgb(22, 163, 74); border: none; border-radius: 6px; padding: 8px 16px; font-weight: 500; font-size: 14px; color: rgb(244, 244, 245); cursor: pointer; line-height: 20px;">Get More Credits</button></div></div></div></div></div></div></div></template></div><div id="ud-floating-button-nested" style="display: none;"></div></body></html>