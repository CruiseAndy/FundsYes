/* 
 * Created by kevin in 2017/10/29
 * import all image, centralized management
 */

let imageRes = require.context('./images', false, /\.(png|jpe?g|svg|gif)$/);
let imageList = imageRes.keys();
let imageDataList = imageList.map(imageRes);
let imageData;

export function getImage(imgName) {
    imageList.findIndex((value, index, arr) => {
        if (value === imgName) {
            imageData = imageDataList[index];
        }
    })
    return imageData;
}

// page header
export const IMGPATH_LOGO = './src/manager/images/logo.png';

// banner
export const IMGPATH_BANNER3 = './src/manager/images/banner3.png';

// annotation
export const IMGPATH_BG1 = './src/manager/images/bg-1.png';
export const IMGPATH_RSPMobile = './src/manager/images/RSP-mobileweb.png';

// intlligence
export const IMGPATH_ICON2 = './src/manager/images/icon2.png'

// login banner
export const IMGPATH_KV = './src/manager/images/kv.jpg';

// overview
export const IMGPATH_BTDOWNBLACK = './src/manager/images/bt_down_black.png';
export const IMGPATH_BTUPBLACK = './src/manager/images/bt_up_black.png';
export const IMGPATH_INVESTINFO_1 = './src/manager/images/B31008_I_0.jpg';
export const IMGPATH_OPENSTATEMENT_1 = './src/manager/images/B31008_P_0.jpg';
export const IMGPATH_CLOSE = './src/manager/images/close.png';



//  export NoviceGuide By Mark
export const SERVICE_OPENACCOUNT = './openAccount.png';
export const SERVICE_ADVANTAGE = './advantage.png';
export const SERVICE_SERVICE = './service.png';
export const SERVICE_ARROW = './arrow.png';
export const SERVICE_ONLINEWRITE = './onlineWrite.png';
export const SERVICE_MAILING = './mailing.png';
export const SERVICE_TRANSACTIONENABLED = './transactionEnabled.png';
export const SERVICE_APPLYOPENACCT = './applyOpenAcct.png';
export const SERVICE_ADVANTAGETITLE1 = './advantageTitle1.png';
export const SERVICE_ADVANTAGETITLE2 = './advantageTitle2.png';
export const SERVICE_ADVANTAGETITLE3 = './advantageTitle3.png';
export const SERVICE_ADVANTAGETITLE4 = './advantageTitle4.png';
export const SERVICE_ADVANTAGETITLE5 = './advantageTitle5.png';
export const SERVICE_SERVICEENJOY = './serviceEnjoy.png';