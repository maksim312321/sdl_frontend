class Auth {
    static async login(e) {
        e.preventDefault();
        const data = {
            name: e.target[0].value,
            password: e.target[1].value,
        };

        let response = await fetch(window.location.origin + '/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });

        const res = await response.json();
        if (typeof res === 'string') {
            document.cookie = encodeURIComponent('authorization') + '=' + encodeURIComponent('Bearer ' + res);
            window.location.href = window.location.origin;
        } else {
            alert(JSON.stringify(res));
        }
    }

    static async reg(e) {
        e.preventDefault();
        const data = {
            name: e.target[0].value,
            password: e.target[1].value,
        };

        let response = await fetch(window.location.origin + '/auth/reg', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });

        const res = await response.json();
        if (typeof res === 'number') {
            window.location.href = window.location.origin + '/login';
        } else {
            alert(JSON.stringify(res));
        }
    }
}

const regForm = document.querySelector('#regForm');
if (regForm) {
    regForm.addEventListener('submit', Auth.reg);
}

const loginForm = document.querySelector('#loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', Auth.login);
}

import './index.css';