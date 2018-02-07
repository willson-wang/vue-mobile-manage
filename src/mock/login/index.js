import { paramBody } from '@/utils';
// import Mock from 'mockjs';

// const Random = Mock.Random;

export default {
    loginIn: (config) => {
        const param = paramBody(config.body);
        console.log(param);
        if (param.username !== 'admin') {
            return {};
        }
        let result = {
            username: 'admin',
            login_name: '123456'
        };
        return result;
    }
};
