export function getCrossOriginCode(url,callback){fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`).then(response => {if (response.ok) return response.json();return new Error('Network response was not ok.')}).then(data => data instanceof Error?callback(null,data):callback(data.contents,null));}
export function print(...msg){console.log(...msg)}
