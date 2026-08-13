function addCookie() {
    const keyInput = document.getElementById('cookieKey');
    const valueInput = document.getElementById('cookieValue');
    
    const key = keyInput.value;
    const value = valueInput.value;
    
    if (key === '' || value === '') {
        alert('Please enter both key and value!');
        return;
    }
    
    document.cookie = key + "=" + value + "; max-age=" + (7 * 24 * 60 * 60);
    
    keyInput.value = '';
    valueInput.value = '';
    
    displayCookies();
}

function deleteCookie(cookieName) {
    document.cookie = cookieName + "=; max-age=0";
    displayCookies();
}

function getAllCookies() {
    if (document.cookie === '') {
        return [];
    }
    
    return document.cookie.split('; ').map(cookie => {
        const [key, value] = cookie.split('=');
        return { key: key, value: value };
    });
}

function displayCookies() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
    
    const cookies = getAllCookies();
    
    if (cookies.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="3">No cookies added yet</td></tr>';
        return;
    }
    
    cookies.forEach((cookie) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${cookie.key}</td>
            <td>${cookie.value}</td>
            <td>
                <button class="delete-btn" onclick="deleteCookie('${cookie.key}')">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    displayCookies();
});