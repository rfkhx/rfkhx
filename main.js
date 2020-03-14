const {app,BrowserWindow}=require('electron');
const path=require('path');
const url=require('url');

let win;

const createWindow=()=>{
    win=new BrowserWindow({
        width:800,
        height:600
    });

    const URL=url.format({
        pathname:path.join(__dirname,'index.html'),
        protocol:'file:',
        slashes:true
    });

    win.loadURL(URL);
    win.webContents.openDevTools();
    win.on('close',()=>{
        win=null;
    });
};

app.on('ready',createWindow);
app.on('window-all-closed',()=>{
    if(process.platform!=='darwin'){
        app.quit();
    }
});
app.on('activate',()=>{
    if(win===null){
        createWindow();
    }
});