const password = document.getElementById('input');
const upper = document.getElementById('uppercase');
const lower = document.getElementById('lowercase');
const number = document.getElementById('number');
const special = document.getElementById('special');
const len = document.getElementById('slider');
const passlenshow = document.getElementById('length');
const check = document.getElementById('strength');

function showlen() {
    passlenshow.textContent = 'Length of the Password: ' + len.value;
}

len.addEventListener('input', showlen);

showlen();

function genpassword() {
    ans = '';
    newans = '';
    let cnt=0;
    if (upper.checked) {
        ans1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        ans += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        newans += ans1[Math.floor(Math.random() * ans1.length)];
        cnt++;
    }
    if (lower.checked) {
        ans1 = 'abcdefghijklmnopqrstuvwxyz';
        ans += 'abcdefghijklmnopqrstuvwxyz';
        newans += ans1[Math.floor(Math.random() * ans1.length)];
        cnt++;
    }
    if (number.checked) {
        ans1 = '0123456789';
        ans += '0123456789';
        newans += ans1[Math.floor(Math.random() * ans1.length)];
        cnt++;
    }
    if (special.checked) {
        ans1 = '!@#$%^&*()_+[]{}|;:,.<>?';
        ans += '!@#$%^&*()_+[]{}|;:,.<>?';
        newans += ans1[Math.floor(Math.random() * ans1.length)];
        cnt++;
    }

    if (ans === '') {
        password.value = '';
        check.textContent = '';
        alert('Select aleast one type of character');
        return;
    }

    for (let i = 0; i < len.value - cnt; i++) {
        newans += ans[Math.floor(Math.random() * ans.length)];
    }
    password.value = newans;

    strength = 0;
    if (len.value >= 12) strength++;
    if (/[A-Z]/.test(password.value) && /[a-z]/.test(password.value)) strength++;
    if (/[0-9]/.test(password.value)) strength++;
    if (/['!@#$%^&*()_+[\]{}|;:,.<>?']/.test(password.value)) strength++;
    if (strength === 0) {
        check.textContent = 'Very Weak';
        check.style.color = 'red';
    }
    if (strength === 1) {
        check.textContent = 'Weak';
        check.style.color = 'orange';
    }
    if (strength === 2) {
        check.textContent = 'Medium';
        check.style.color = 'yellow';
    }
    if (strength === 3) {
        check.textContent = 'Strong';
        check.style.color = 'green';
    }
    if (strength === 4) {
        check.textContent = 'Very strong';
        check.style.color = 'darkgreen';
    }
    check.style.backgroundColor = '#D3D8E8';
    check.style.borderRadius = '10px';
    check.style.padding = '10px';
    check.style.width = '200px';
    check.style.textAlign = 'center';
    check.style.color = '#6678A7';
}

function copytoclipboard(){
    if(password.value===''){
        alert('First please generate a password to copy.');
        return;
    }
    const copy=document.getElementById('copy');
    copy.textContent='Copied!';
    navigator.clipboard.writeText(password.value)


}