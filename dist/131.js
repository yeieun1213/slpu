(self.webpackChunkslpu3=self.webpackChunkslpu3||[]).push([[131],{131:(t,e,n)=>{"use strict";n.r(e),n.d(e,{getCLS:()=>v,getFCP:()=>y,getFID:()=>k,getLCP:()=>C,getTTFB:()=>P});var i,a,r,o,u=function(t,e){return{name:t,value:void 0===e?-1:0,delta:0,entries:[],id:"v1-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},c=function(t,e){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var n=new PerformanceObserver((function(t){return t.getEntries().map(e)}));return n.observe({type:t,buffered:!0}),n}}catch(t){}},s=!1,f=function(t,e){s||"undefined"!=typeof InstallTrigger||(addEventListener("beforeunload",(function(){})),s=!0),addEventListener("visibilitychange",(function n(i){"hidden"===document.visibilityState&&(t(i),e&&removeEventListener("visibilitychange",n,!0))}),!0)},m=function(t){addEventListener("pageshow",(function(e){e.persisted&&t(e)}),!0)},p=new WeakSet,d=function(t,e,n){var i;return function(){e.value>=0&&(n||p.has(e)||"hidden"===document.visibilityState)&&(e.delta=e.value-(i||0),(e.delta||void 0===i)&&(i=e.value,t(e)))}},v=function(t,e){var n,i=u("CLS",0),a=function(t){t.hadRecentInput||(i.value+=t.value,i.entries.push(t),n())},r=c("layout-shift",a);r&&(n=d(t,i,e),f((function(){r.takeRecords().map(a),n()})),m((function(){i=u("CLS",0),n=d(t,i,e)})))},l=-1,h=function(){return"hidden"===document.visibilityState?0:1/0},S=function(){f((function(t){var e=t.timeStamp;l=e}),!0)},g=function(){return l<0&&(l=h(),S(),m((function(){setTimeout((function(){l=h(),S()}),0)}))),{get timeStamp(){return l}}},y=function(t,e){var n,i=g(),a=u("FCP"),r=c("paint",(function(t){"first-contentful-paint"===t.name&&(r&&r.disconnect(),t.startTime<i.timeStamp&&(a.value=t.startTime,a.entries.push(t),p.add(a),n()))}));r&&(n=d(t,a,e),m((function(i){a=u("FCP"),n=d(t,a,e),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-i.timeStamp,p.add(a),n()}))}))})))},w={passive:!0,capture:!0},L=new Date,T=function(t,e){i||(i=e,a=t,r=new Date,F(removeEventListener),b())},b=function(){if(a>=0&&a<r-L){var t={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+a};o.map((function(e){e(t)})),o=[]}},E=function(t){if(t.cancelable){var e=(t.timeStamp>1e12?new Date:performance.now())-t.timeStamp;"pointerdown"==t.type?function(t,e){var n=function(){T(t,e),a()},i=function(){a()},a=function(){removeEventListener("pointerup",n,w),removeEventListener("pointercancel",i,w)};addEventListener("pointerup",n,w),addEventListener("pointercancel",i,w)}(e,t):T(e,t)}},F=function(t){["mousedown","keydown","touchstart","pointerdown"].map((function(e){return t(e,E,w)}))},k=function(t,e){var n,r=g(),s=u("FID"),v=function(t){t.startTime<r.timeStamp&&(s.value=t.processingStart-t.startTime,s.entries.push(t),p.add(s),n())},l=c("first-input",v);n=d(t,s,e),l&&f((function(){l.takeRecords().map(v),l.disconnect()}),!0),l&&m((function(){var r;s=u("FID"),n=d(t,s,e),o=[],a=-1,i=null,F(addEventListener),r=v,o.push(r),b()}))},C=function(t,e){var n,i=g(),a=u("LCP"),r=function(t){var e=t.startTime;e<i.timeStamp&&(a.value=e,a.entries.push(t)),n()},o=c("largest-contentful-paint",r);if(o){n=d(t,a,e);var s=function(){p.has(a)||(o.takeRecords().map(r),o.disconnect(),p.add(a),n())};["keydown","click"].map((function(t){addEventListener(t,s,{once:!0,capture:!0})})),f(s,!0),m((function(i){a=u("LCP"),n=d(t,a,e),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-i.timeStamp,p.add(a),n()}))}))}))}},P=function(t){var e,n=u("TTFB");e=function(){try{var e=performance.getEntriesByType("navigation")[0]||function(){var t=performance.timing,e={entryType:"navigation",startTime:0};for(var n in t)"navigationStart"!==n&&"toJSON"!==n&&(e[n]=Math.max(t[n]-t.navigationStart,0));return e}();n.value=n.delta=e.responseStart,n.entries=[e],t(n)}catch(t){}},"complete"===document.readyState?setTimeout(e,0):addEventListener("pageshow",e)}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbHB1My8uL25vZGVfbW9kdWxlcy93ZWItdml0YWxzL2Rpc3Qvd2ViLXZpdGFscy5qcyJdLCJuYW1lcyI6WyJ0IiwiZSIsIm4iLCJpIiwiYSIsIm5hbWUiLCJ2YWx1ZSIsImRlbHRhIiwiZW50cmllcyIsImlkIiwiY29uY2F0IiwiRGF0ZSIsIm5vdyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInIiLCJQZXJmb3JtYW5jZU9ic2VydmVyIiwic3VwcG9ydGVkRW50cnlUeXBlcyIsImluY2x1ZGVzIiwiZ2V0RW50cmllcyIsIm1hcCIsIm9ic2VydmUiLCJ0eXBlIiwiYnVmZmVyZWQiLCJvIiwidSIsIkluc3RhbGxUcmlnZ2VyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwidmlzaWJpbGl0eVN0YXRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImMiLCJwZXJzaXN0ZWQiLCJzIiwiV2Vha1NldCIsImYiLCJoYXMiLCJtIiwiaGFkUmVjZW50SW5wdXQiLCJwdXNoIiwidGFrZVJlY29yZHMiLCJkIiwicCIsInYiLCJ0aW1lU3RhbXAiLCJsIiwic2V0VGltZW91dCIsIlMiLCJkaXNjb25uZWN0Iiwic3RhcnRUaW1lIiwiYWRkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicGVyZm9ybWFuY2UiLCJ5IiwicGFzc2l2ZSIsImNhcHR1cmUiLCJoIiwiZyIsIlQiLCJ3IiwiZW50cnlUeXBlIiwidGFyZ2V0IiwiY2FuY2VsYWJsZSIsInByb2Nlc3NpbmdTdGFydCIsIkwiLCJFIiwiYiIsIm9uY2UiLCJGIiwiZ2V0RW50cmllc0J5VHlwZSIsInRpbWluZyIsIm1heCIsIm5hdmlnYXRpb25TdGFydCIsInJlc3BvbnNlU3RhcnQiLCJyZWFkeVN0YXRlIl0sIm1hcHBpbmdzIjoiOEtBQUEsSUFBSUEsRUFBRUMsRUFBRUMsRUFBRUMsRUFBRUMsRUFBRSxTQUFTSixFQUFFQyxHQUFHLE1BQU0sQ0FBQ0ksS0FBS0wsRUFBRU0sV0FBTSxJQUFTTCxHQUFHLEVBQUUsRUFBRU0sTUFBTSxFQUFFQyxRQUFRLEdBQUdDLEdBQUcsTUFBTUMsT0FBT0MsS0FBS0MsTUFBTSxLQUFLRixPQUFPRyxLQUFLQyxNQUFNLGNBQWNELEtBQUtFLFVBQVUsUUFBUUMsRUFBRSxTQUFTaEIsRUFBRUMsR0FBRyxJQUFJLEdBQUdnQixvQkFBb0JDLG9CQUFvQkMsU0FBU25CLEdBQUcsQ0FBQyxJQUFJRSxFQUFFLElBQUllLHFCQUFvQixTQUFVakIsR0FBRyxPQUFPQSxFQUFFb0IsYUFBYUMsSUFBSXBCLE1BQU0sT0FBT0MsRUFBRW9CLFFBQVEsQ0FBQ0MsS0FBS3ZCLEVBQUV3QixVQUFTLElBQUt0QixHQUFHLE1BQU1GLE1BQU15QixHQUFFLEVBQUdDLEVBQUUsU0FBUzFCLEVBQUVDLEdBQUd3QixHQUFHLG9CQUFvQkUsaUJBQWlCQyxpQkFBaUIsZ0JBQWUsZUFBZ0JILEdBQUUsR0FBSUcsaUJBQWlCLG9CQUFtQixTQUFVMUIsRUFBRUMsR0FBRyxXQUFXMEIsU0FBU0Msa0JBQWtCOUIsRUFBRUcsR0FBR0YsR0FBRzhCLG9CQUFvQixtQkFBbUI3QixHQUFFLE9BQU8sSUFBSzhCLEVBQUUsU0FBU2hDLEdBQUc0QixpQkFBaUIsWUFBVyxTQUFVM0IsR0FBR0EsRUFBRWdDLFdBQVdqQyxFQUFFQyxNQUFLLElBQUtpQyxFQUFFLElBQUlDLFFBQVFDLEVBQUUsU0FBU3BDLEVBQUVDLEVBQUVDLEdBQUcsSUFBSUMsRUFBRSxPQUFPLFdBQVdGLEVBQUVLLE9BQU8sSUFBSUosR0FBR2dDLEVBQUVHLElBQUlwQyxJQUFJLFdBQVc0QixTQUFTQyxtQkFBbUI3QixFQUFFTSxNQUFNTixFQUFFSyxPQUFPSCxHQUFHLElBQUlGLEVBQUVNLFlBQU8sSUFBU0osS0FBS0EsRUFBRUYsRUFBRUssTUFBTU4sRUFBRUMsT0FBT3FDLEVBQUUsU0FBU3RDLEVBQUVDLEdBQUcsSUFBSUMsRUFBRUMsRUFBRUMsRUFBRSxNQUFNLEdBQUdxQixFQUFFLFNBQVN6QixHQUFHQSxFQUFFdUMsaUJBQWlCcEMsRUFBRUcsT0FBT04sRUFBRU0sTUFBTUgsRUFBRUssUUFBUWdDLEtBQUt4QyxHQUFHRSxNQUFNZ0MsRUFBRWxCLEVBQUUsZUFBZVMsR0FBR1MsSUFBSWhDLEVBQUVrQyxFQUFFcEMsRUFBRUcsRUFBRUYsR0FBR3lCLEdBQUUsV0FBWVEsRUFBRU8sY0FBY3BCLElBQUlJLEdBQUd2QixPQUFPOEIsR0FBRSxXQUFZN0IsRUFBRUMsRUFBRSxNQUFNLEdBQUdGLEVBQUVrQyxFQUFFcEMsRUFBRUcsRUFBRUYsUUFBUXlDLEdBQUcsRUFBRUMsRUFBRSxXQUFXLE1BQU0sV0FBV2QsU0FBU0MsZ0JBQWdCLEVBQUUsS0FBS2MsRUFBRSxXQUFXbEIsR0FBRSxTQUFVMUIsR0FBRyxJQUFJQyxFQUFFRCxFQUFFNkMsVUFBVUgsRUFBRXpDLEtBQUksSUFBSzZDLEVBQUUsV0FBVyxPQUFPSixFQUFFLElBQUlBLEVBQUVDLElBQUlDLElBQUlaLEdBQUUsV0FBWWUsWUFBVyxXQUFZTCxFQUFFQyxJQUFJQyxNQUFNLE9BQU8sQ0FBQyxnQkFBZ0IsT0FBT0YsS0FBS00sRUFBRSxTQUFTaEQsRUFBRUMsR0FBRyxJQUFJQyxFQUFFQyxFQUFFMkMsSUFBSXJCLEVBQUVyQixFQUFFLE9BQU9zQixFQUFFVixFQUFFLFNBQVEsU0FBVWhCLEdBQUcsMkJBQTJCQSxFQUFFSyxPQUFPcUIsR0FBR0EsRUFBRXVCLGFBQWFqRCxFQUFFa0QsVUFBVS9DLEVBQUUwQyxZQUFZcEIsRUFBRW5CLE1BQU1OLEVBQUVrRCxVQUFVekIsRUFBRWpCLFFBQVFnQyxLQUFLeEMsR0FBR2tDLEVBQUVpQixJQUFJMUIsR0FBR3ZCLFNBQVN3QixJQUFJeEIsRUFBRWtDLEVBQUVwQyxFQUFFeUIsRUFBRXhCLEdBQUcrQixHQUFFLFNBQVU3QixHQUFHc0IsRUFBRXJCLEVBQUUsT0FBT0YsRUFBRWtDLEVBQUVwQyxFQUFFeUIsRUFBRXhCLEdBQUdtRCx1QkFBc0IsV0FBWUEsdUJBQXNCLFdBQVkzQixFQUFFbkIsTUFBTStDLFlBQVl6QyxNQUFNVCxFQUFFMEMsVUFBVVgsRUFBRWlCLElBQUkxQixHQUFHdkIsZUFBZW9ELEVBQUUsQ0FBQ0MsU0FBUSxFQUFHQyxTQUFRLEdBQUlDLEVBQUUsSUFBSTlDLEtBQUsrQyxFQUFFLFNBQVN2RCxFQUFFQyxHQUFHSixJQUFJQSxFQUFFSSxFQUFFSCxFQUFFRSxFQUFFRCxFQUFFLElBQUlTLEtBQUtnRCxFQUFFNUIscUJBQXFCNkIsTUFBTUEsRUFBRSxXQUFXLEdBQUczRCxHQUFHLEdBQUdBLEVBQUVDLEVBQUV1RCxFQUFFLENBQUMsSUFBSXJELEVBQUUsQ0FBQ3lELFVBQVUsY0FBY3hELEtBQUtMLEVBQUV1QixLQUFLdUMsT0FBTzlELEVBQUU4RCxPQUFPQyxXQUFXL0QsRUFBRStELFdBQVdiLFVBQVVsRCxFQUFFNkMsVUFBVW1CLGdCQUFnQmhFLEVBQUU2QyxVQUFVNUMsR0FBR0UsRUFBRWtCLEtBQUksU0FBVXJCLEdBQUdBLEVBQUVJLE1BQU1ELEVBQUUsS0FBSzhELEVBQUUsU0FBU2pFLEdBQUcsR0FBR0EsRUFBRStELFdBQVcsQ0FBQyxJQUFJOUQsR0FBR0QsRUFBRTZDLFVBQVUsS0FBSyxJQUFJbEMsS0FBSzBDLFlBQVl6QyxPQUFPWixFQUFFNkMsVUFBVSxlQUFlN0MsRUFBRXVCLEtBQUssU0FBU3ZCLEVBQUVDLEdBQUcsSUFBSUMsRUFBRSxXQUFXd0QsRUFBRTFELEVBQUVDLEdBQUdHLEtBQUtELEVBQUUsV0FBV0MsS0FBS0EsRUFBRSxXQUFXMkIsb0JBQW9CLFlBQVk3QixFQUFFb0QsR0FBR3ZCLG9CQUFvQixnQkFBZ0I1QixFQUFFbUQsSUFBSTFCLGlCQUFpQixZQUFZMUIsRUFBRW9ELEdBQUcxQixpQkFBaUIsZ0JBQWdCekIsRUFBRW1ELEdBQTlOLENBQWtPckQsRUFBRUQsR0FBRzBELEVBQUV6RCxFQUFFRCxLQUFLMkQsRUFBRSxTQUFTM0QsR0FBRyxDQUFDLFlBQVksVUFBVSxhQUFhLGVBQWVxQixLQUFJLFNBQVVwQixHQUFHLE9BQU9ELEVBQUVDLEVBQUVnRSxFQUFFWCxPQUFPWSxFQUFFLFNBQVNoRSxFQUFFdUIsR0FBRyxJQUFJYSxFQUFFSSxFQUFFSSxJQUFJSCxFQUFFdkMsRUFBRSxPQUFPd0MsRUFBRSxTQUFTNUMsR0FBR0EsRUFBRWtELFVBQVVSLEVBQUVHLFlBQVlGLEVBQUVyQyxNQUFNTixFQUFFZ0UsZ0JBQWdCaEUsRUFBRWtELFVBQVVQLEVBQUVuQyxRQUFRZ0MsS0FBS3hDLEdBQUdrQyxFQUFFaUIsSUFBSVIsR0FBR0wsTUFBTVUsRUFBRWhDLEVBQUUsY0FBYzRCLEdBQUdOLEVBQUVGLEVBQUVsQyxFQUFFeUMsRUFBRWxCLEdBQUd1QixHQUFHdEIsR0FBRSxXQUFZc0IsRUFBRVAsY0FBY3BCLElBQUl1QixHQUFHSSxFQUFFQyxnQkFBZSxHQUFJRCxHQUFHaEIsR0FBRSxXQUFZLElBQUloQixFQUFFMkIsRUFBRXZDLEVBQUUsT0FBT2tDLEVBQUVGLEVBQUVsQyxFQUFFeUMsRUFBRWxCLEdBQUd0QixFQUFFLEdBQUdGLEdBQUcsRUFBRUQsRUFBRSxLQUFLMkQsRUFBRS9CLGtCQUFrQlosRUFBRTRCLEVBQUV6QyxFQUFFcUMsS0FBS3hCLEdBQUc0QyxRQUFRTyxFQUFFLFNBQVNuRSxFQUFFQyxHQUFHLElBQUlDLEVBQUVDLEVBQUUyQyxJQUFJckIsRUFBRXJCLEVBQUUsT0FBT2tDLEVBQUUsU0FBU3RDLEdBQUcsSUFBSUMsRUFBRUQsRUFBRWtELFVBQVVqRCxFQUFFRSxFQUFFMEMsWUFBWXBCLEVBQUVuQixNQUFNTCxFQUFFd0IsRUFBRWpCLFFBQVFnQyxLQUFLeEMsSUFBSUUsS0FBS3dDLEVBQUUxQixFQUFFLDJCQUEyQnNCLEdBQUcsR0FBR0ksRUFBRSxDQUFDeEMsRUFBRWtDLEVBQUVwQyxFQUFFeUIsRUFBRXhCLEdBQUcsSUFBSTBDLEVBQUUsV0FBV1QsRUFBRUcsSUFBSVosS0FBS2lCLEVBQUVELGNBQWNwQixJQUFJaUIsR0FBR0ksRUFBRU8sYUFBYWYsRUFBRWlCLElBQUkxQixHQUFHdkIsTUFBTSxDQUFDLFVBQVUsU0FBU21CLEtBQUksU0FBVXJCLEdBQUc0QixpQkFBaUI1QixFQUFFMkMsRUFBRSxDQUFDeUIsTUFBSyxFQUFHWixTQUFRLE9BQVE5QixFQUFFaUIsR0FBRSxHQUFJWCxHQUFFLFNBQVU3QixHQUFHc0IsRUFBRXJCLEVBQUUsT0FBT0YsRUFBRWtDLEVBQUVwQyxFQUFFeUIsRUFBRXhCLEdBQUdtRCx1QkFBc0IsV0FBWUEsdUJBQXNCLFdBQVkzQixFQUFFbkIsTUFBTStDLFlBQVl6QyxNQUFNVCxFQUFFMEMsVUFBVVgsRUFBRWlCLElBQUkxQixHQUFHdkIsZUFBZW1FLEVBQUUsU0FBU3JFLEdBQUcsSUFBSUMsRUFBRUMsRUFBRUUsRUFBRSxRQUFRSCxFQUFFLFdBQVcsSUFBSSxJQUFJQSxFQUFFb0QsWUFBWWlCLGlCQUFpQixjQUFjLElBQUksV0FBVyxJQUFJdEUsRUFBRXFELFlBQVlrQixPQUFPdEUsRUFBRSxDQUFDNEQsVUFBVSxhQUFhWCxVQUFVLEdBQUcsSUFBSSxJQUFJaEQsS0FBS0YsRUFBRSxvQkFBb0JFLEdBQUcsV0FBV0EsSUFBSUQsRUFBRUMsR0FBR1csS0FBSzJELElBQUl4RSxFQUFFRSxHQUFHRixFQUFFeUUsZ0JBQWdCLElBQUksT0FBT3hFLEVBQWhMLEdBQXFMQyxFQUFFSSxNQUFNSixFQUFFSyxNQUFNTixFQUFFeUUsY0FBY3hFLEVBQUVNLFFBQVEsQ0FBQ1AsR0FBR0QsRUFBRUUsR0FBRyxNQUFNRixNQUFNLGFBQWE2QixTQUFTOEMsV0FBVzVCLFdBQVc5QyxFQUFFLEdBQUcyQixpQkFBaUIsV0FBVzNCIiwiZmlsZSI6IjEzMS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciB0LGUsbixpLGE9ZnVuY3Rpb24odCxlKXtyZXR1cm57bmFtZTp0LHZhbHVlOnZvaWQgMD09PWU/LTE6MCxkZWx0YTowLGVudHJpZXM6W10saWQ6XCJ2MS1cIi5jb25jYXQoRGF0ZS5ub3coKSxcIi1cIikuY29uY2F0KE1hdGguZmxvb3IoODk5OTk5OTk5OTk5OSpNYXRoLnJhbmRvbSgpKSsxZTEyKX19LHI9ZnVuY3Rpb24odCxlKXt0cnl7aWYoUGVyZm9ybWFuY2VPYnNlcnZlci5zdXBwb3J0ZWRFbnRyeVR5cGVzLmluY2x1ZGVzKHQpKXt2YXIgbj1uZXcgUGVyZm9ybWFuY2VPYnNlcnZlcigoZnVuY3Rpb24odCl7cmV0dXJuIHQuZ2V0RW50cmllcygpLm1hcChlKX0pKTtyZXR1cm4gbi5vYnNlcnZlKHt0eXBlOnQsYnVmZmVyZWQ6ITB9KSxufX1jYXRjaCh0KXt9fSxvPSExLHU9ZnVuY3Rpb24odCxlKXtvfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgSW5zdGFsbFRyaWdnZXJ8fChhZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsKGZ1bmN0aW9uKCl7fSkpLG89ITApO2FkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsKGZ1bmN0aW9uIG4oaSl7XCJoaWRkZW5cIj09PWRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSYmKHQoaSksZSYmcmVtb3ZlRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIixuLCEwKSl9KSwhMCl9LGM9ZnVuY3Rpb24odCl7YWRkRXZlbnRMaXN0ZW5lcihcInBhZ2VzaG93XCIsKGZ1bmN0aW9uKGUpe2UucGVyc2lzdGVkJiZ0KGUpfSksITApfSxzPW5ldyBXZWFrU2V0LGY9ZnVuY3Rpb24odCxlLG4pe3ZhciBpO3JldHVybiBmdW5jdGlvbigpe2UudmFsdWU+PTAmJihufHxzLmhhcyhlKXx8XCJoaWRkZW5cIj09PWRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSkmJihlLmRlbHRhPWUudmFsdWUtKGl8fDApLChlLmRlbHRhfHx2b2lkIDA9PT1pKSYmKGk9ZS52YWx1ZSx0KGUpKSl9fSxtPWZ1bmN0aW9uKHQsZSl7dmFyIG4saT1hKFwiQ0xTXCIsMCksbz1mdW5jdGlvbih0KXt0LmhhZFJlY2VudElucHV0fHwoaS52YWx1ZSs9dC52YWx1ZSxpLmVudHJpZXMucHVzaCh0KSxuKCkpfSxzPXIoXCJsYXlvdXQtc2hpZnRcIixvKTtzJiYobj1mKHQsaSxlKSx1KChmdW5jdGlvbigpe3MudGFrZVJlY29yZHMoKS5tYXAobyksbigpfSkpLGMoKGZ1bmN0aW9uKCl7aT1hKFwiQ0xTXCIsMCksbj1mKHQsaSxlKX0pKSl9LGQ9LTEscD1mdW5jdGlvbigpe3JldHVyblwiaGlkZGVuXCI9PT1kb2N1bWVudC52aXNpYmlsaXR5U3RhdGU/MDoxLzB9LHY9ZnVuY3Rpb24oKXt1KChmdW5jdGlvbih0KXt2YXIgZT10LnRpbWVTdGFtcDtkPWV9KSwhMCl9LGw9ZnVuY3Rpb24oKXtyZXR1cm4gZDwwJiYoZD1wKCksdigpLGMoKGZ1bmN0aW9uKCl7c2V0VGltZW91dCgoZnVuY3Rpb24oKXtkPXAoKSx2KCl9KSwwKX0pKSkse2dldCB0aW1lU3RhbXAoKXtyZXR1cm4gZH19fSxTPWZ1bmN0aW9uKHQsZSl7dmFyIG4saT1sKCksbz1hKFwiRkNQXCIpLHU9cihcInBhaW50XCIsKGZ1bmN0aW9uKHQpe1wiZmlyc3QtY29udGVudGZ1bC1wYWludFwiPT09dC5uYW1lJiYodSYmdS5kaXNjb25uZWN0KCksdC5zdGFydFRpbWU8aS50aW1lU3RhbXAmJihvLnZhbHVlPXQuc3RhcnRUaW1lLG8uZW50cmllcy5wdXNoKHQpLHMuYWRkKG8pLG4oKSkpfSkpO3UmJihuPWYodCxvLGUpLGMoKGZ1bmN0aW9uKGkpe289YShcIkZDUFwiKSxuPWYodCxvLGUpLHJlcXVlc3RBbmltYXRpb25GcmFtZSgoZnVuY3Rpb24oKXtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZ1bmN0aW9uKCl7by52YWx1ZT1wZXJmb3JtYW5jZS5ub3coKS1pLnRpbWVTdGFtcCxzLmFkZChvKSxuKCl9KSl9KSl9KSkpfSx5PXtwYXNzaXZlOiEwLGNhcHR1cmU6ITB9LGg9bmV3IERhdGUsZz1mdW5jdGlvbihpLGEpe3R8fCh0PWEsZT1pLG49bmV3IERhdGUsVChyZW1vdmVFdmVudExpc3RlbmVyKSx3KCkpfSx3PWZ1bmN0aW9uKCl7aWYoZT49MCYmZTxuLWgpe3ZhciBhPXtlbnRyeVR5cGU6XCJmaXJzdC1pbnB1dFwiLG5hbWU6dC50eXBlLHRhcmdldDp0LnRhcmdldCxjYW5jZWxhYmxlOnQuY2FuY2VsYWJsZSxzdGFydFRpbWU6dC50aW1lU3RhbXAscHJvY2Vzc2luZ1N0YXJ0OnQudGltZVN0YW1wK2V9O2kubWFwKChmdW5jdGlvbih0KXt0KGEpfSkpLGk9W119fSxMPWZ1bmN0aW9uKHQpe2lmKHQuY2FuY2VsYWJsZSl7dmFyIGU9KHQudGltZVN0YW1wPjFlMTI/bmV3IERhdGU6cGVyZm9ybWFuY2Uubm93KCkpLXQudGltZVN0YW1wO1wicG9pbnRlcmRvd25cIj09dC50eXBlP2Z1bmN0aW9uKHQsZSl7dmFyIG49ZnVuY3Rpb24oKXtnKHQsZSksYSgpfSxpPWZ1bmN0aW9uKCl7YSgpfSxhPWZ1bmN0aW9uKCl7cmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLG4seSkscmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIixpLHkpfTthZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsbix5KSxhZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLGkseSl9KGUsdCk6ZyhlLHQpfX0sVD1mdW5jdGlvbih0KXtbXCJtb3VzZWRvd25cIixcImtleWRvd25cIixcInRvdWNoc3RhcnRcIixcInBvaW50ZXJkb3duXCJdLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIHQoZSxMLHkpfSkpfSxFPWZ1bmN0aW9uKG4sbyl7dmFyIG0sZD1sKCkscD1hKFwiRklEXCIpLHY9ZnVuY3Rpb24odCl7dC5zdGFydFRpbWU8ZC50aW1lU3RhbXAmJihwLnZhbHVlPXQucHJvY2Vzc2luZ1N0YXJ0LXQuc3RhcnRUaW1lLHAuZW50cmllcy5wdXNoKHQpLHMuYWRkKHApLG0oKSl9LFM9cihcImZpcnN0LWlucHV0XCIsdik7bT1mKG4scCxvKSxTJiZ1KChmdW5jdGlvbigpe1MudGFrZVJlY29yZHMoKS5tYXAodiksUy5kaXNjb25uZWN0KCl9KSwhMCksUyYmYygoZnVuY3Rpb24oKXt2YXIgcjtwPWEoXCJGSURcIiksbT1mKG4scCxvKSxpPVtdLGU9LTEsdD1udWxsLFQoYWRkRXZlbnRMaXN0ZW5lcikscj12LGkucHVzaChyKSx3KCl9KSl9LGI9ZnVuY3Rpb24odCxlKXt2YXIgbixpPWwoKSxvPWEoXCJMQ1BcIiksbT1mdW5jdGlvbih0KXt2YXIgZT10LnN0YXJ0VGltZTtlPGkudGltZVN0YW1wJiYoby52YWx1ZT1lLG8uZW50cmllcy5wdXNoKHQpKSxuKCl9LGQ9cihcImxhcmdlc3QtY29udGVudGZ1bC1wYWludFwiLG0pO2lmKGQpe249Zih0LG8sZSk7dmFyIHA9ZnVuY3Rpb24oKXtzLmhhcyhvKXx8KGQudGFrZVJlY29yZHMoKS5tYXAobSksZC5kaXNjb25uZWN0KCkscy5hZGQobyksbigpKX07W1wia2V5ZG93blwiLFwiY2xpY2tcIl0ubWFwKChmdW5jdGlvbih0KXthZGRFdmVudExpc3RlbmVyKHQscCx7b25jZTohMCxjYXB0dXJlOiEwfSl9KSksdShwLCEwKSxjKChmdW5jdGlvbihpKXtvPWEoXCJMQ1BcIiksbj1mKHQsbyxlKSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZ1bmN0aW9uKCl7cmVxdWVzdEFuaW1hdGlvbkZyYW1lKChmdW5jdGlvbigpe28udmFsdWU9cGVyZm9ybWFuY2Uubm93KCktaS50aW1lU3RhbXAscy5hZGQobyksbigpfSkpfSkpfSkpfX0sRj1mdW5jdGlvbih0KXt2YXIgZSxuPWEoXCJUVEZCXCIpO2U9ZnVuY3Rpb24oKXt0cnl7dmFyIGU9cGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShcIm5hdmlnYXRpb25cIilbMF18fGZ1bmN0aW9uKCl7dmFyIHQ9cGVyZm9ybWFuY2UudGltaW5nLGU9e2VudHJ5VHlwZTpcIm5hdmlnYXRpb25cIixzdGFydFRpbWU6MH07Zm9yKHZhciBuIGluIHQpXCJuYXZpZ2F0aW9uU3RhcnRcIiE9PW4mJlwidG9KU09OXCIhPT1uJiYoZVtuXT1NYXRoLm1heCh0W25dLXQubmF2aWdhdGlvblN0YXJ0LDApKTtyZXR1cm4gZX0oKTtuLnZhbHVlPW4uZGVsdGE9ZS5yZXNwb25zZVN0YXJ0LG4uZW50cmllcz1bZV0sdChuKX1jYXRjaCh0KXt9fSxcImNvbXBsZXRlXCI9PT1kb2N1bWVudC5yZWFkeVN0YXRlP3NldFRpbWVvdXQoZSwwKTphZGRFdmVudExpc3RlbmVyKFwicGFnZXNob3dcIixlKX07ZXhwb3J0e20gYXMgZ2V0Q0xTLFMgYXMgZ2V0RkNQLEUgYXMgZ2V0RklELGIgYXMgZ2V0TENQLEYgYXMgZ2V0VFRGQn07XG4iXSwic291cmNlUm9vdCI6IiJ9