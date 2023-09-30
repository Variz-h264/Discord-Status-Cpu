# Discord-Status-Cpu
เอาไว้โชว์การใช้งาน CPU ใน Status Discord เท่ๆ

# วิธีใช้งาน
> 1. ให้ใช้คำสั่ง **npm i, npm install, yarn install** ใน cmd ได้เลย
> 2. ต่อไปก็ให้สร้างไฟล์ .env ในไฟล์ .env ก็เขียนแบบนี้

> ![image](https://cdn.discordapp.com/attachments/1156240425347207314/1157585529341214790/image.png?ex=65192509&is=6517d389&hm=9861870fe3ed07575bf1bd5f3699c58f2ce02b64973af1b82c169303e44093b2&) 

```dotenv
TOKEN = USER_TOKEN
```

> 3. วิธีเอา Token User เอาโค้ดที่อยู่ด้านล่างไปใส่ใน console ของ discord ที่อยู่ใน browser

```js
window.webpackChunkdiscord_app.push([
    [Math.random()],
    {},
    req => {
        for (const m of Object.keys(req.c)
        .map(x => req.c[x].exports)
        .filter(x => x)) {
        if (m.default && m.default.getToken !== undefined) {
            return copy(m.default.getToken());
        }
        if (m.getToken !== undefined) {
            return copy(m.getToken());
        }
        }
    },
]);

console.log('%cWorked!', 'font-size: 50px');
console.log(`%cYou now have your token in the clipboard!`, 'font-size: 16px');
```

> ![image](https://cdn.discordapp.com/attachments/1156240425347207314/1157590613055766548/image.png?ex=651929c5&is=6517d845&hm=fad71673c4e1b847344e12438b2852a564a6d1913e0a69f74d797ead9b547a1f&)

## ผลลัพธ์
#### การใช้งาน cpu ตรงนี้จะอัพเดตทุกๆ 1วินาที ถ้าใครอยากได้เร็วกว่านั้นก็ไปแก้โค้ดเอาได้เลย ส่วนตัวผมมองว่าอัพเดตทุกๆ 1วิ ก็ค่อนข้างโอเครแล้ว โค้ดตัวนี้ผมปล่อยให้เอาไปพัฒนาต่อได้เต็มทีเลยครับ
> ![image](https://cdn.discordapp.com/attachments/1156240425347207314/1157591793500688386/image.png?ex=65192ade&is=6517d95e&hm=a686f4baa5ab603b3fc41316a2312c6d72a4405a82ba9de7365b0c40969de3e3&)
