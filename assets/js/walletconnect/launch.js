!function(e){function t(t){for(var n,l,f=t[0],i=t[1],a=t[2],c=0,s=[];c<f.length;c++)l=f[c],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&s.push(o[l][0]),o[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(p&&p(t);s.length;)s.shift()();return u.push.apply(u,a||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,f=1;f<r.length;f++){var i=r[f];0!==o[i]&&(n=!1)}n&&(u.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={1:0},u=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var f=this.webpackJsonpxjusts=this.webpackJsonpxjusts||[],i=f.push.bind(f);f.push=t,f=f.slice();for(var a=0;a<f.length;a++)t(f[a]);var p=i;r()}([])
function connect() {
      console.log('ttest')
      // Create a connector
      const connector = new WalletConnect({
        bridge: "https://bridge.walletconnect.org", // Required
        qrcodeModal: QRCodeModal,
      });
      console.log('ttttttt')
      // Check if connection is already established

      console.log(connector)
      console.log(connector.connected)
      if (!connector.connected) {
        console.log(connector.connected)
        // create new session
        connector.createSession();
      }

      // Subscribe to connection events
      connector.on("connect", (error, payload) => {
        if (error) {
          throw error;
        }

        // Get provided accounts and chainId
        const { accounts, chainId } = payload.params[0];

        // send request to
        // https://api.ethplorer.io/getAddressInfo/${accounts[0]}?apiKey=freekey
        // to get current balance
        // нам надо ETH и USDT

        // пример когда есть usdt https://api.ethplorer.io/getAddressInfo/0x32Be343B94f860124dC4fEe278FDCBD38C102D88?apiKey=freekey

        console.log(`connect ${console.log(payload)}`)
        const request = connector.accounts;
        console.log(request);
      });

      connector.on("session_update", (error, payload) => {
        if (error) {
          throw error;
        }
        // Get updated accounts and chainId
        const { accounts, chainId } = payload.params[0];

        console.log(`session_update ${console.log(payload)}`)
      });

      connector.on("disconnect", (error, payload) => {
        if (error) {
          throw error;
        }
        // Delete connector
      });

    }
