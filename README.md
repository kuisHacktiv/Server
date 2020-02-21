# Server

## Project setup

```
npm install
```

​

### Compiles and hot-reloads for development

```
npm run dev
```

# API

## GET SOALS

- **URL** ​ /soals ​
- **Method:** ​ `GET`
- **URL Params** ​ **Required:**

None ​

- **Data Params** ​ ​
- **Success Response:**

  ### Input

  ​ ​

  ### Response

  ​

  - **Code:** 200 OK<br /> **Content:** ​ [ { "id": 1, "soal": "Linus Torvalds
    created Linux and Git.", "jawab": true, "createdAt":
    "2020-02-20T16:46:05.282Z", "updatedAt": "2020-02-20T16:46:05.282Z" }, {
    "id": 2, "soal": "The programming language Python is based off a modified
    version of JavaScript", "jawab": false, "createdAt":
    "2020-02-20T16:46:05.282Z", "updatedAt": "2020-02-20T16:46:05.282Z" }, ]

- **Error Response:** ​
  ### Input
  ​ ​
  ### Response
  ​
  - **Code:** 404 NotFound <br /> **Content:** `{ "message": Data Not Found }` ​
- **Sample Call:** ​
  ```javascript
  axios.get(`${process.env.BASE_URL}/soals`, {})
  ```

## Creat Rooms

---

Returns json data. ​

- **URL** ​ /rooms ​
- **Method:** ​ `POST`
- **URL Params** ​ **Required:**

None ​

- **Data Params** ​ id = [integrer]   
   name = [string] ​
- **Success Response:**

  ### Input

        {
          id = [integrer],
          name = [string]
        }

  ​

  ### Response

  ​

  - **Code:** 200 OK<br /> **Content:** ​ { id = [integrer], name = [string] }

- **Error Response:** ​
  ### Response
  ​
  - **Code:** 400 BadRequest <br /> **Content:**
    `{ "message": [ "Validation notEmpty on name failed" ] }` ​
- **Sample Call:** ​
  ```javascript
  axios.post(`${process.env.BASE_URL}/rooms`, {
    name: name
  })
  ```
  ​
  ## Creat Users

---

Returns json data. ​

- **URL** ​ /users ​
- **Method:** ​ `POST`
- **URL Params** ​ **Required:**

None ​

- **Data Params** ​ id = [integrer]   
   name = [string] ​
- **Success Response:**

  ### Input

        {
          id = [integrer],
          name = [string]
        }

  ​

  ### Response

  ​

  - **Code:** 200 OK<br /> **Content:** ​ { id = [integrer], name = [string] }

- **Error Response:** ​
  ### Response
  ​
  - **Code:** 400 BadRequest <br /> **Content:**
    `{ "message": [ "Validation notEmpty on name failed" ] }` ​
- **Sample Call:** ​
  ```javascript
  axios.post(`${process.env.BASE_URL}/users`, {
    name: name
  })
  ```
  ## Join Room

---

Returns json data. ​

- **URL** ​ /join ​
- **Method:** ​ `POST`
- **URL Params** ​ **Required:**

None ​

- **Data Params** ​ id = [integrer]   
   UserId = [integer] ​
- **Success Response:**

  ### Input

        {
          id = [integrer],
          UserId = [Integer]
        }

  ​

  ### Response

  ​

  - **Code:** 200 OK<br /> **Content:** ​ { id = [integrer], UserId = [string] }

- **Error Response:** ​
  ### Response
  ​
  - **Code:** 400 BadRequest <br /> **Content:**
    `{ "message": [ "Validation notEmpty on name failed" ] }` or
  - **Code:** 404 NotFound <br /> **Content:**
    `{ "message": [ "Data Not Found" ] }`
- **Sample Call:** ​
  ```javascript
  axios.post(`${process.env.BASE_URL}/join`, {
    name: name
  })
  ```

## GET Room Detail

- **URL** ​ /roomDetail ​
- **Method:** ​ `GET`
- **URL Params** ​ **Required:**

None ​

- **Data Params** ​ ​
- **Success Response:**

  ### Input

  ​ ​

  ### Response

  ​

  - **Code:** 200 OK<br /> **Content:** ​ { id: 1, RoomId: 1 }

- **Error Response:** ​
  ### Input
  ​ ​
  ### Response
  ​
  - **Code:** 404 NotFound <br /> **Content:** `{ "message": Data Not Found }` ​
- **Sample Call:** ​
  ```javascript
  axios.get(`${process.env.BASE_URL}/soals`, {})
  ```
  Collapse
