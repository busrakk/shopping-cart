import { sendRequest } from "./rootApi";
const GET = 'get';
// const POST = 'post';

export const productAllApi = async (payload = []) => {
    return sendRequest(GET, '/api/allproduct' ,payload);
}

export const productFindApi = async (id, payload = []) => {
    return sendRequest(GET, `/api/product/${id}`, payload);
}
