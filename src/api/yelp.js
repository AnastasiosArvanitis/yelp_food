import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer V3IeN1md9Il_zZ9lpAcdFPuFnK4MjIDgaxKM4vbqIBIWhAXl4MLz0591l1T8vF6PPjlO3dOzEhwB6CAxnb_nDVDI2_OauraGrG6Cyi4TISjP2qe0mianGN2ogahLYHYx'
    }
});
