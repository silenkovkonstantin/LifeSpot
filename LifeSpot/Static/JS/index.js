function filterContent() {
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++) {
        let videoText = elements[i].querySelector(".video-title").innerText;
        if (!videoText.toLowerCase().includes(inputParseFunction() /* ������ ���������� ������ ���������� � ������� ��������� */.toLowerCase())) {
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}

/*
* ������ ������ ��������� � ����� ������� ���������.
* ����� "�������������" ����� ���������
* 
* */
let session = new Map();

/*
* ���������� ������ ������ ����� ��� ������ ������������ �� ��������
* 
* */
function handleSession() {
    // �������� ����� ������ ������
    session.set("startDate", new Date().toLocaleString())
    // �������� UserAgent
    session.set("userAgent", window.navigator.userAgent)
}

/*
* �������� �������� ������������
* 
* */
function checkAge() {
    session.set("age", prompt("����������, ������� ��� �������?"))

    if (session.get("age") >= 18) {
        alert("������������ �� LifeSpot! " + '\n' + "������� �����: " + new Date().toLocaleString());
    }
    else {
        alert("���� ���������� �� ������������� ��� ��� ������ 18 ���. �� ������ ��������������");
        window.location.href = "http://www.google.com"
    }
}

/*
* ����� ������ ������ � �������
* 
* */
let sessionLog = function logSession() {
    for (let result of session) {
        console.log(result)
    }
}