import { ENDPOINTS } from "../config/config.js"
import { logger } from "../utils/logger.js";

const responseSearchParam = '0cAFcWeA615AvqVyYFSOLofTuwROkFlLkZezs13NDQnaRVr4lJR2bTzU6TU2F6Us0N7UEP7FtJmufIewJGA8d_NuP55SBlWa6iWUa8Hll65huKG26UGaHU0WttYjWaebS5eqMfJ965SC-lFM0aml4itwRZxHAVlKyo6eweVKKdWts-0AKcpzzE4wHP3wS1-BRboMgdB0Dj_MNW7oEyOo4aS0KGrDoMTCFDRW9FcDtS7o9RGXz_xG6Gj13byoyy5H_n7fAqsbHn-A4QhO5k4mUuC4eM64k8G_RSc_i0NKPB2aBpxE4Di-f1oriorvLkoB-R3FrOOPSvfb-P0-qbzXKSyZl0JcDdoGOCSBTieS27CnWXdprOAt8s5ZS8kmL5I-twQJsf-WJ1_-8-enEjl1rLn9GXSSaB9pZ8FGn6hTjhXnmoAsWW4OfUVK9V2h8juqpGVthw351G64ywWJ_8G4hGvOydRkN7pwL9kHj4BCbB9mwxyUSDZS6Ag2SfCD8HapxqDgxNL1Cny3iPZWxfm-3IBS1K4DzyKmx7UAN2IPhZbNIr-qbDPfUx6dqduIKrzB4h77apn53XUD5T1JifB83CPaCyBEO3hzl3UaCTFBymmd7WndROCPxRn2ZWOB7Enb9mU4SRbrWaSdIVItegaBiBKC3OYgUi_XyvJZl_vWIsGsaUqIscEEAXTevTHScOKTyRDP0TmL9d56xg_IkSlYXNGu12NeF-KvK2xxUiqTJqkzwevmFVh66Vsyf8pVeUjknWo73ssFEQkaUNiBFc9CqsjjvSD587a3odJw';
const cookie = 'srv_id=b1e3a22d4e9e59eebaa5b1e8f80cba3b; TS017d34da=016ce491da72f65bf617d7b4d69204e2477c235945f7381dd06d19af9f8fad3d3db7073b0bcb7ba664f7917cf169f7c53347e22860; TS018f9923=016ce491da99dff073442c86748b37bbac7c662da4ef3b4700547087beef2389fd5e31429b81c497316d45f7abbf65f7587e6e934e';

export const checkAppointments = async () => {
    const url = new URL(ENDPOINTS.gestionaMadrid.obtieneDiasDisponibles);
    url.searchParams.append('idServicio', '435');
    url.searchParams.append('idGrupo', '222');
    url.searchParams.append('tiempoCita', '15');
    url.searchParams.append('response', responseSearchParam);
    url.searchParams.append('sinCaptchaAux', 'true');
    url.searchParams.append('_', '1757007062491');

    const headers = new Headers({
        Cookie: cookie
    });

    const init = {
        method: 'GET',
        headers
    };
    
    return await fetch(url, init)
        .then(response => response.json())
        .catch(error => logger.error(error));
}