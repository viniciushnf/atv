(this["webpackJsonpconvert-text"]=this["webpackJsonpconvert-text"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(4),i=c.n(a),r=(c(22),c(23),c(15)),d=c(2),o=c(17),m=(c(24),c(1));var l=function(){document.title="Convert Text";var e=Object(n.useState)("normal"),t=Object(o.a)(e,2),c=t[0],s=t[1],a="";return Object(n.useEffect)((function(){var e=document.getElementById("textIn").value,t=document.getElementById("btnMai"),n=document.getElementById("btnMin"),s=document.getElementById("btnPriMai"),a=document.getElementById("btnNormal"),r=document.getElementById("btnRemEsp");switch(c){case"mai":i.a.render(e.toUpperCase(),document.getElementById("textOut")),t.classList.add("active"),n.classList.remove("active"),s.classList.remove("active"),a.classList.remove("active"),r.classList.remove("active");break;case"min":i.a.render(e.toLowerCase(),document.getElementById("textOut")),t.classList.remove("active"),n.classList.add("active"),s.classList.remove("active"),a.classList.remove("active"),r.classList.remove("active");break;case"priMai":if(""!=e){var d=e.toLowerCase().replace(/(?:^|\s)\S/g,(function(e){return e.toUpperCase()}));i.a.render(d,document.getElementById("textOut"))}t.classList.remove("active"),n.classList.remove("active"),s.classList.add("active"),a.classList.remove("active"),r.classList.remove("active");break;case"remEsp":i.a.render(e.replace(/\s/g,""),document.getElementById("textOut")),t.classList.remove("active"),n.classList.remove("active"),s.classList.remove("active"),a.classList.remove("active"),r.classList.add("active");break;case"normal":i.a.render(e,document.getElementById("textOut")),t.classList.remove("active"),n.classList.remove("active"),s.classList.remove("active"),a.classList.add("active"),r.classList.remove("active");break;default:i.a.render(e,document.getElementById("textOut")),t.classList.remove("active"),n.classList.remove("active"),s.classList.remove("active"),a.classList.add("active")}}),[c]),Object(m.jsxs)("div",{children:[Object(m.jsx)("header",{children:Object(m.jsx)("a",{target:"_blank",href:"https://viniciushnf.com/",children:Object(m.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAABTCAYAAADHh3aFAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAyMDowNDoyNCAxMjo1NTozNHxqoIcAABa+SURBVHhe7Z0NlFxFlYDvrXrdk0BICLAC/iSZ7okhETEGQVAhhHT3RAQEMWwQMPzooqLiosCqe1xwj7rLevhVd3HxYMAfTFZFMJrpniQbZVGJCCj5I9M9k7hIgIWEJJhk+lXdvfW6+nW/7vmf6Z6emfedU9NV9V53v3l93617q25VQUhISEhISEhISEhIQ4P2dcCcvwWO2B+FZqHl8Shhqq0eNwjCXYrcXdMPwo5VJ0K3rQ4ZBwxI2Jc+A9FXJzlXA+hlGsS7hQBpD41bNMA+oWkN36H/TMdVxlaHjGH6FfbkszJFDnxTALbYqgkHaWgjdP+uPQ47bVXIGKRPYU9mxfVE4tZqTU47NdAuJPFXW1EzCGkBP2hTQek/kRAv2+qagaSP5NZrBv/PR9kqD03wkpBwQXqW+5itqiuLd0BMaud8fvC6pXJXrXkzvGQPDR8CTGTlexHwRCFoa1uzeoQlg+zRIZPojM4V5L6Ps69q0itZWbxaODI69CrsqVzko3wXvm2Lplnfi0S3C6G+29YMXba65qSyzif5Ku8mguszcfd2W11b+Mdf0uW8U7n0KUJcxoIvTDUL/D6p8fS22flN3nl14uyd8AbHdbZydoopa01deanmbmiGg6Y8XJI55wYWhFttkR94+nJbXP2TLQ6JJc/CPC2dp/i3i5iy1vrp9gf0ArjFiNLo4P2IlSQ7I/M10TdskdFPNDnuvExc3VxPQTfwdeTMK2IdnWHWamua3d9mZqtLhaQEC7/XogiEI0joh0/bCZO98+pEpFucyS+eoBuEwFmOdt5qi8OH4Byb8yCi8212yGh0FhcF3SCEeFvrMphhi6NCj8JOmm7jHzbq5Yk2cxO0ePUMeM47OMFIN6v1Ctz3sj4qaFHE2BEutzaDIJFzFqZy8hvFlOgQl9hDAZJZeV75eamsPNfUa4Gud0I5PdUNEULI22wBAcrmhgxJXdWThRJG7JqHQpWwJzqd01jQF5m81vxPC3HpaNtao83aOGwkAX6zzgrghqU08B4p1HQY/722mFjLXWYPBWBT4qLy87hZ8/yGqFTtpGCXd5JB66fcWfk/2dKwYZ/oezZbgMR3bW7IoNK/MKavLRoTcP2a2aOrMKuEXWj6gM2CFPBQpjn/lC1OaPY57t0s5f9n8gLxb3Z3Ou/xDgwAFVV/tFkPtrnjNhsEK+rZzjUvq2fCbiXc+WzKfZxQXzkpr8/cgCOnJdOx/P0sjGfww/YZhbQoHXfLTNihkZ4NfwZy38q+1ieJ9OV54Z5jzEN7eFSoclCT28XjKMUphZJelo7pHxXyo0OiQ57DNupqzt6cjrm3FGpHBzYt7uVbdrUtDup6kjn5EgIeY/Ks8bqn/949bNXFQXMh2SGfR4HHeQWC/LQD7pRwYGvkqLbZBb7e5sAVesSayv4wZkEy63y+NRedY6v6Jdkp35vKikttseZoQP9+sF/zBpsdECzovnbnmx7dc2rQWVv4DEzxBd2g9dZQ0EeWKs2eyjnGWXFM3iX3uHVxeMHka83ZXZEFjqYnuCm/i53C62x1n5o92SmeJhKz2mPuNFtVU5K5yHJuiYv27Cq+nottvl/Y+bwDEf3/C4mSbXHVbouwJBs5SSN5Zovle/z5l5vMwk44sokc/70EuisT0ytsERI74PVCOR8tlPQr3BrfbXKL2cFl/4vNUnwTAe1kT/S+9rj7qHdaGcaB5gfwLFtk8CE2bcqvxWPpSpCvniLPY9PkfaBwFj+1r/HVPO0qdf/6N0PWnuYRvCZzzbQ5E1OrbBFat8AsanKW2yI3cfTU2pj6mS0CO+dJQHyXLbLidVetmwWbbdHDXM+ek+WFLMWtBDhTaDhAgjYjiAd7uv5qzW4F3RBV9esTRUUFh28Qjh/fdMn/4JgIXUASwZsvgiPSGvRsmy3inz/pIBzJLzf7icQVpr4IuY5pZexx8VV+OCalss5PJOIj3KJcyRotwU7oVXxvNyRyouoBtYLufz4b1vNNfTmJLEx7dYFYxw/MT/kzP4ISEuxDvJ8f4C9J6WxOZiMBpzt4TXAzv2epqS+impyZ/OIf52u7wNSXkeTkH5davsVUFkl2wOv2nCx+zd+/ylwP/w9J/kfO5/w/sDf8ZKpDftWe6tOTsIfUhqCTqoLOKCEGnVMKaPnBMCWqnR+ztrvQln3M4BhqvHMhlRTaQOG33McfYPr7qzDd1Ky5v9PaCbNsVc1BcB5AFKfbYhB+svmiPm+sAlvjEQp7nTgk85u8rtwiiEFNrilQdiHYgzMYWOOewz7FKo3uPERaZEId7CEwfoHT5dgOiIHBrcSpsuzhIQ0r+YPm8nd8xVYVBF47y2yxpqS2wgksuSlbZIi1u3uCYtOQ7/FuW8kSj4HrCYW9TpihfQH0rC3yD6EDmpyFMGazQApeGJavpPXvMg+oZe3NsKWtWf03+xnft0c8RGUr0g+stYMmCro3pJu7t3bH1c38IPl96VTZdVorouJtNueBqG5si8G2tewDCUH32Wq+pxDoRAiFvY5oLPXIsGMdZykq6yAg34ZnzTxUE6aAEDsDMSiEz9tcAaUGFXpBRL75QopeKEZ/mr5+QXqLd8Cg+T+qA0TSD0MwuAcKo/0FynwjDfttziMU9jrCku3/EKx1Jp/9Z/C6eY1DqTW+0TvAsCYdsgnTC0MXwn/yTH2/O5jNosCDQygO2KxpneoyQkqCOmzWQ06Sn7ZZdoy1b8bwedtt1iMU9jrC5kRg3EK6jtfss5pqLkZWeughO6cjzrmXwFF8ZZNs0fSABeJoRLd7pSvct5gU2e/eZatryvSN7ka+ktLcAo2fWJyVCZPFSep/uEk7yyTlqECUbCjsdYT906DGJuukujLgnGpRCBNoBNwyQe+JtrnQZfq/TVp9Usk5rCVm5Jk0ftMWjRRzg4M/WrQlOic9A15pj7kbTFpXEbwYCnsdMbau1lTqLcCCk8rNv+/YscPXvScOJna9IWBnedDdlPXgFW9ug37GFo2tdZRsUj8/dyt4IRk90TDCThK9bjluJgMDWYJwj81WTVRgR06RCJ7f6IiAPV4YWGK1VOrFYIfvicqQ25AqzD0SJC8lDb7PwAq+5VBU/NT4QLYqQMMI+9GP559mQf+s0OoeW+WRnu0+hgRnRl9xvSHwclDj55D0x21xTEBl8TWaCpqdm+SynpiKkdaQXlkTz/+RhL6mvBcIQbynScv/sMUAdRX2VFbemsw663tKe052TJzIeVo436g8xqr7y4emO6sr61lwvkAgPlJZX0ypDnFl4ZsbByqLfyn2d5MoaXb+1Ua6J2Zc0x7TDwCWBrc8EJencpEP25JPfTU74SfY9DirXomEuMh+c8MgQJSbMdO8gClAf5jdIWqo+QPqsMaPvEzH1Je8Ud0y2De6I7UzOGm+7maMBr0pHXOxlgkPuc326xoO2ucGwwaUWMx/S06gHnqYQC3Ia6j5ChKDxYSDn90F80xa8iy80fTp7ou6V5DSG+0pxmGdrvPOx2zRo2Fs9olCZj68hkSlcFiFrTZntNHzI7pExgiw4buwlzWU3zmAiP7Eb0NrVt5eNBsTHeImW11Tduec0x3tbDJJO47Xl/7bGXDAlXopm7z7vJMMqD9kcx6hsI8CKEthAyDxgzZnBKnxnFMTdkDaH4nUgMfarAcRLSiajfwP+PE9/ULBWVoIOOAVGwSVwqGJSl2N62OwgxVJaf6sFifYnEco7KMA25e+sPMP0GSz/PuPeJjAiEAS/Qkfpj87sQ3mmrwJFdaIXt7AAj/gVkmgW9LADAtwMDyYYLrNVUEgjrBZ49AvCHY1lsUBVczTHbKwJ7c5ZwaWfeg73XZOJ5SmnE1wSPQcDiCGHsNeU1iI/RlGBhFx7k7m4J3RrPyamXxuq43af8Lm+kUTdJk2wxYZcWqqQ3xmcdY5xfTacQtylT1QDVKnzZnQ4qkRkveenXXOMNM0CcnvikbST9qsx5CFHSPwUf5bWvah7/T3iiI9Bv73x7nPwTGLnoX4+3b0/qSPNST27ITyj9OQwm7WztFK/9oWDYsRnN+iwM/ZMj/B9Fy3VL+0pX4xy7No1L+xRSOJyM3G7RLhcX66bkChN5X7CuV0H+DrKYvR57de6iD8Cgl/wfk32Wq+0XCnzXkMWdhpsvuxYgBQfwm63bltsXyga6g32LuemsyJ5cmc8/NEztnbfch5KeI4HXnlvJLocF5Odsgf8RN8IZ/nN//90ZqTrfxeN5VzaECpQ95m31oT2mbBDn4JrMXDP96hgy2wzRYbjqYmfQmpUjx+OewU7iXEDw16OT4lvsC6vWq0mP2A7VpGLuBP7jFsYsOJsB+RLtO99RQZL4Po1kyzftDWePQ04dpvWoTrvm4kewdSHc5+LXRXe0yfaKt8jPAqKa4lEl80dqGt7hW+IVm+yTetjasf2yofO5m3k/+R1ZmYe+45ndG5rtJ3kF3lrF9I35NpCd4ow3AmXFfC9+Imtlt8LUSAL/C1/rMtBli8GY6Wk6Q/2Zydue1tMdfXWotyMDMC8gZb5HsjnszE89+xRdNjkuD/3Z/jyd+1kr/rV7ZoJ7WXlsDj4w/w8d/Zoo9Zm/+g41zDGnORBn2M0GI3q8vHtHTvbZ8Jf7GnefR3TUUSzzqnCQeuJ9BzWPhf5M9Odx/u/vuGY2F/Yb1R7U3UUCi+s7Y5HzBLvN85Kq8GwlNJ6OP4O15mudgcQVyxJm4iI4M0hLC3bonO0Y67EqU4yVZZ9KPsbT/IzdqL/APP05quMOsc2oMefLE/JnKvLl+1rFLYbfWwGUlhD6k/o94bY+KQVZPeWCnoLKg3pmP6jExcf9MswcCCdcukPcrMMH+kcEYBflovEigf9wYXQkL6oF/NTlEwC8kMyzmMdsNLpoWo1OytO7h5zeMj/MgFotRYm/8sE3e9Zje5XS5FCfOFq+4wn5F8Hg6H12SHmTjsnWxhrd8FEfVu05yGmj2kJ/oUdrZ/cjiYgYJeMI4EdbszZNTZURT2JV3Rea7Wv+GmpWo+pNJ07toWtTqZFdciCrvuoF6OB3WmbR48n8rKO9m08adiFdGk/7A/ot8z7TU4tlzYzWI6++b37wf0hUZ+IB35RbYPr7FVobCPMfo0Y4g8+3gdJ9PPOuTE2vBbRz0Dxbh0D630XT0JuoEc5fWjsqD7Q+l8qStYgAuBXVTqZy1HoFgwzXU+ZYs+u092vq8d58XhJJCOWVGrKOghY5C+NbvWV2ZadGn4dZiUmzGpLJzKUr2h0oQxaEVL2mertsR253NCwr95dRoUSTzFeOTJDvl1NmM+651cBpsy2wDVO2U3TC/X7Euy4jKNYtgL7LN5dQQiLLHFULOPMfoU9iZyj3tkBNd6rLTZEx3yA0KgWSU4MPWLFPwgM9u91MxsTy2PfIRAz+eH4r8ys9Q6s+vFFNfZxq1CafCAYUF8DqR7RmYWdIY2e0hP9Oug1rrrMbVdXqBZ4M2KUraKVbTpjMGPpVvy/p5OhpMJIkfnnBV81YGdKzTAn0GLxe0t3V7AUiMLu+k16o6WzDc1GXaaPmVb9DChqzYL4hBQ+xworc3CnJ2FY0HC0Sbv5GGftxZ6BQtfgCnyQGmlYLkHdpiIS1usOt4bQsH+4joxY51R73pMz1YPCcJ3sWr29k7y8IaO6R5+8B5O5MTlpnsymXM+fXSn+EOloDPrULvvKAp6o8P2/23F8FSTIvtkVRhF+XEhnarBEQfkZ4vHNTq/Mw64PeRjPrf8c2iq8w57yKPyeG8J0fmWfcuYZ8jCbkwQFsaVA0pZ54es0UqTiitgDf6EUOrtBPSViiHg8wSI+yVihpugO/lyywej2LzCa6b93k1lWuBFWzfhEAKO3/32wpopIX0zZGFnVWIcNbMMcf+J4G9JyEBscSVsLu3NxNQ/RqUbZ/v7eiIvSCgQommWmSANbYD6KprsxtOx/Lcrd6/ojWQXNBdnt/SVEp0wdyir3I4miFi3DRnGMkMW9qlx9XFj0w8kRSLu0W0tymwo0C+/aIZdZr/TTFy/i987JQ/uCV4wmXJn52Pu4ZkWd0m6Wd+XOb5kf/ZHKisvQu3kemqmK5MgZ3NTZ8+z0xsVFHChN9g2PIwPUjXFcSR9ntFmyMK+CkEZ53UgyWyAZd82KPi9h9bHYJtZbYqdsI6hbpqlQW0kovs52+M4QCARPMgmk8mPJabAX0XVeuwhQUbdQa0HpjchE1fLWVNd3G+Ku5e0xVSbfevYgXrebjKkxIQQ9okAASRaN8PxthjSA6GwjxOEAKmbet45O6RAKOzjCNbuYa9MH9Rd2M3C9qmc80ItE0Wd39uvG/cQwdrCiDPfWxQLWrdDYFe5kBL1FXakVRr0Nk4v1TSh3sWvm0jDz+03NzA0o7Kv3x4YKPsJYYPNgxbS2zt10GiYWnkdqWeGFxbdaNQ1NqYvEh3OO/ZH3U1mZSdb5bGwE47c0BwMDzaYGBOlmyKZEw71GO5bC0YiNobvr5l4bgbbBoaG19ItbmAVLrPUBCB68zu9wTeU95Sui3amV6jm1IflYj4nXagzHwNnmQX6bbF8M+Ve4c++NhPXYbjASLJoW+Rt7GBtnOo6/gRdg9mSMKKcl1MdIrCMmUFJ8TBE3IwtTliIcPprh/I/MQ9FoQZnpK6QC7m+4dZoHG0aQthlhMwOzuaXC2gwQprJD4EgEIEt/gzmR0ZEf2WoMQt5E8VNbE95GjgCpzw2F/Zxc/wTW2PCKi5zhRuIpOwP1vyH+CVwHUjBVnasE/bGjDKa6ENsDh1bnuyhgeKtnyPQGyEuQPjBqBrcaDMLwsOV15Fu0f6eouOBUNjHOELDYeZ16hNqPUu5F3duloQjjJxq8iElQmEfJ9joT38naxT0AbZNxpUZMlxCYR9PdCvflGEbvlWX760aEt6M8UT6BNgKWheXrYvwjzvg9TAnAqGwjzMIoeSohgQIhX2cEXX0D203YkgFobCPM8xEGYSxECZRfxpC2PnH8UMUBgpf+KDfM2FwaYXNhZRRJezl2xYqs6RFHTiw3/0TaJVWVApo6heBKxBoQBscTDS6Z6tfaqK6xDSNJaqEnQXIv0ko6xP19uhJsDvdQq1rBzgp25COube0xVTVuo61BBWVrU1Je22m4TBzdVlL+X3uIQWqhV3QczYLSHKOzYYwJMgPv9UU3Gmi0dCi1OceUqA6xDcr7wDE60yevfrvt8fcUZvIm8zJpQi4kjTcmGlxvQVORwtv6b2s08Xq4fVehaRUeqaa8FGXY4keNDs8ZLMm3PDi1HZoscUJzVGdzlVFQeeHb8+0fWrg/kVIQ1Al7G2z1Aat9ONeASHC0v9AcFPViceiLdE5qOFfbNHYd3etOhG6bSlkjFAl7MZDRRTX+70yQpzWpJyfjcY+pNyyeIsrIdKo7ZeU3BaZH2nSab5TXsw935fnJ3err3sHQ8YUvXYtJnPOjXzwX23ReGR/IYFfnnzI/cHDcyGwFXetSGRhmkDnf9kZJCHo/WbzWXuo5vB3zxAkr9MCr2WNUIgx0XCQBJyV6WHbxJDGp/d+dAJkB/FriHiTrfEwQ9FC6yc1il0CqzdsHWn4+05nYfM0Owv9Xv7OwMayRLSPr/EPtjgSHM7f9CZuV95qyx58HfukpksGumZlSOPRu7BbEtvF5SjFbXziMbZqwsE+zNOOkB9eE8/3uA17yNigX2E3GHMC0LlOaFoGAufa6vGOSwSPotT3pu/TP4RbjHIPGcsMSNjLMVu4qIiM4wC2XB+LEDvmgnAXNLlb0zPgFVsdEhISEhISEhISMjoA/D9ete29DspfnwAAAABJRU5ErkJggg=="})})}),Object(m.jsx)("div",{id:"main",children:Object(m.jsxs)("div",{id:"containerText",children:[Object(m.jsxs)("div",{id:"boxTextL",className:"boxText",children:[Object(m.jsx)("h1",{children:"Insira o texto"}),Object(m.jsx)("textarea",{onKeyUp:function(){return function(){switch(document.getElementById("btnCopiar").innerHTML="Copiar",a=document.getElementById("textIn").value,document.getElementById("caracteresCount").innerHTML=a.length,c){case"mai":i.a.render(a.toUpperCase(),document.getElementById("textOut"));break;case"min":i.a.render(a.toLowerCase(),document.getElementById("textOut"));break;case"priMai":if(""!=a){var e=a.toLowerCase().replace(/(?:^|\s)\S/g,(function(e){return e.toUpperCase()}));i.a.render(e,document.getElementById("textOut"))}break;case"remEsp":i.a.render(a.replace(/\s/g,""),document.getElementById("textOut"));break;default:i.a.render(a,document.getElementById("textOut"))}}()},id:"textIn"}),Object(m.jsx)("div",{className:"bottom",children:Object(m.jsxs)("p",{children:["Quantidade de caracteres: ",Object(m.jsx)("span",{id:"caracteresCount",children:"0"})]})})]}),Object(m.jsxs)("div",{id:"boxTextR",className:"boxText",children:[Object(m.jsx)("h1",{children:"Texto modificado"}),Object(m.jsx)("textarea",{id:"textOut",readOnly:!0}),Object(m.jsx)("div",{className:"bottom",children:Object(m.jsx)("button",{onClick:function(){return document.getElementById("textOut").select(),document.execCommand("copy"),void(document.getElementById("btnCopiar").innerHTML="Copiado!")},id:"btnCopiar",children:"Copiar"})})]})]})}),Object(m.jsx)("div",{id:"containerButtons",children:Object(m.jsxs)("div",{className:"center",children:[Object(m.jsx)("button",{id:"btnNormal",className:"btn",onClick:function(){return s("normal")},children:"Normal"}),Object(m.jsx)("button",{id:"btnMai",className:"btn",onClick:function(){return s("mai")},children:"MAI\xdaSCULO"}),Object(m.jsx)("button",{id:"btnMin",className:"btn",onClick:function(){return s("min")},children:"min\xfasculo"}),Object(m.jsx)("button",{id:"btnPriMai",className:"btn",onClick:function(){return s("priMai")},children:"Primeira Letra De Cada Palavra Mai\xfasculo"}),Object(m.jsx)("button",{id:"btnRemEsp",className:"btn",onClick:function(){return s("remEsp")},children:"RemoverEspa\xe7os"})]})})]})};var b=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(r.a,{children:Object(m.jsxs)(d.c,{children:[Object(m.jsx)(d.a,{path:"/",children:Object(m.jsx)(l,{})}),Object(m.jsx)(d.a,{path:"/oi",children:Object(m.jsx)(l,{})})]})})})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,32)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(b,{})}),document.getElementById("root")),u()}},[[31,1,2]]]);
//# sourceMappingURL=main.5225dfa6.chunk.js.map