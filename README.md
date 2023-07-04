# CodeJourney.AI-Server

---

## GET /schedules

> Get all schedules

- **URL :**
  /schedules

- **Method:** `GET`

- **URL Params :** `not needed`

- **Data Params** `not needed`

- **Success Response:**

    <details>

    <summary> <b> Code: </b> 200  </summary>

  ```json
  [
    {
      "_id": "64a308674bfb61f2db9c7703",
      "userId": 1,
      "scheduleTitle": "http request",
      "startDate": "2021-06-05T17:00:00.000Z",
      "schedules": [
        {
          "task": "Learn the basics of making an HTTP request with JavaScript",
          "complete": false,
          "_id": "64a308674bfb61f2db9c7704"
        },
        {
          "task": "Understand the concepts and terminology related to HTTP requests",
          "complete": false,
          "_id": "64a308674bfb61f2db9c7705"
        },
        {
          "task": "Familiarize yourself with the various options for making an HTTP request in JavaScript",
          "complete": false,
          "_id": "64a308674bfb61f2db9c7706"
        },
        {
          "task": "Learn about the different types of HTTP requests and what they are used for",
          "complete": false,
          "_id": "64a308674bfb61f2db9c7707"
        },
        {
          "task": "Explore methods for sending and receiving data with an HTTP request",
          "complete": false,
          "_id": "64a308674bfb61f2db9c7708"
        },
        {
          "task": "Understand the differences between a synchronous and asynchronous request",
          "complete": false,
          "_id": "64a308674bfb61f2db9c7709"
        },
        {
          "task": "Learn how to handle errors when making an HTTP request",
          "complete": false,
          "_id": "64a308674bfb61f2db9c770a"
        },
        {
          "task": "Write code to make your own HTTP requests in JavaScript",
          "complete": false,
          "_id": "64a308674bfb61f2db9c770b"
        }
      ],
      "__v": 0
    },
    {
      "_id": "64a308694bfb61f2db9c770d",
      "userId": 1,
      "scheduleTitle": "http request",
      "startDate": "2021-06-05T17:00:00.000Z",
      "schedules": [
        {
          "task": "Learn the basics of making an HTTP request with JavaScript",
          "complete": false,
          "_id": "64a308694bfb61f2db9c770e"
        },
        {
          "task": "Understand the concepts and terminology related to HTTP requests",
          "complete": false,
          "_id": "64a308694bfb61f2db9c770f"
        },
        {
          "task": "Familiarize yourself with the various options for making an HTTP request in JavaScript",
          "complete": false,
          "_id": "64a308694bfb61f2db9c7710"
        },
        {
          "task": "Learn about the different types of HTTP requests and what they are used for",
          "complete": false,
          "_id": "64a308694bfb61f2db9c7711"
        },
        {
          "task": "Explore methods for sending and receiving data with an HTTP request",
          "complete": false,
          "_id": "64a308694bfb61f2db9c7712"
        },
        {
          "task": "Understand the differences between a synchronous and asynchronous request",
          "complete": false,
          "_id": "64a308694bfb61f2db9c7713"
        },
        {
          "task": "Learn how to handle errors when making an HTTP request",
          "complete": false,
          "_id": "64a308694bfb61f2db9c7714"
        },
        {
          "task": "Write code to make your own HTTP requests in JavaScript",
          "complete": false,
          "_id": "64a308694bfb61f2db9c7715"
        }
      ],
      "__v": 0
    }
  ]
  ```

    </details>

- **Error Response:**

    <details>

    <summary> <b> Code: </b> 401 Unauthorized  </summary>

  ```json
  {
    "msg": "Invalid Token"
  }
  ```

    </details>

    <details>

    <summary> <b> Code: </b> 500 Internal Server Error  </summary>

  ```json
  {
    "msg": "Internal Server Error!"
  }
  ```

    </details>

---

---

## POST /generatecustomtask

> Generate a custom tasks

- **URL :**
  /generatecustomtask

- **Method:** `POST`

- **URL Params :** `not needed`

- **Data Params**

    <details>

    <summary> <b> Request Body </b> </summary>

  ```json
  {
    "prompt" : String
  }
  ```

    </details>

- **Success Response:**

    <details>

    <summary> <b> Code: </b> 200  </summary>

  ```json
  {
    "title": "http request",
    "tasks": [
      {
        "task": "Learn the basics of HTTP"
      },
      {
        "task": "Understand the different types of HTTP requests (GET, POST, PUT, DELETE)"
      },
      {
        "task": "Learn how to use the fetch API to make HTTP requests with JavaScript"
      },
      {
        "task": "Understand how to use XMLHttpRequest"
      },
      {
        "task": "Learn how to make requests to remote APIs and how to handle the response"
      },
      {
        "task": "Learn how to parse JSON data"
      },
      {
        "task": "Understand how to set HTTP headers"
      },
      {
        "task": "Learn how to work with authentication in HTTP requests"
      },
      {
        "task": "Understand CORS and how to work with it"
      }
    ]
  }
  ```

    </details>

- **Error Response:**

    <details>

    <summary> <b> Code: </b> 400 Bad Request  </summary>

  ```json
  {
    "msg": "http request php is not in javascript scope"
  }
  ```

    </details>

    <details>

    <summary> <b> Code: </b> 401 Unauthorized  </summary>

  ```json
  {
    "msg": "Invalid Token"
  }
  ```

    </details>

    <details>

    <summary> <b> Code: </b> 500 Internal Server Error  </summary>

  ```json
  {
    "msg": "Internal Server Error!"
  }
  ```

    </details>

---

## POST /schedules

> Create Schedules

- **URL :**
  /schedules

- **Method:** `POST`

- **URL Params :** `not needed`

- **Data Params**

    <details>

    <summary> <b> Request Body </b> </summary>

  ```json
  {
    "startDate": "06/06/2021",
    "title": "http request",
    "tasks": [
      {
        "task": "Learn the basics of making an HTTP request with JavaScript"
      },
      {
        "task": "Understand the concepts and terminology related to HTTP requests"
      },
      {
        "task": "Familiarize yourself with the various options for making an HTTP request in JavaScript"
      },
      {
        "task": "Learn about the different types of HTTP requests and what they are used for"
      },
      {
        "task": "Explore methods for sending and receiving data with an HTTP request"
      },
      {
        "task": "Understand the differences between a synchronous and asynchronous request"
      },
      {
        "task": "Learn how to handle errors when making an HTTP request"
      },
      {
        "task": "Write code to make your own HTTP requests in JavaScript"
      }
    ]
  }
  ```

    </details>

- **Success Response:**

    <details>

    <summary> <b> Code: </b> 201  </summary>

  ```json
  {
    "msg": "Schedule successfully created!"
  }
  ```

    </details>

- **Error Response:**

    <details>

    <summary> <b> Code: </b> 401 Unauthorized  </summary>

  ```json
  {
    "msg": "Invalid Token"
  }
  ```

    </details>

    <details>

    <summary> <b> Code: </b> 500 Internal Server Error  </summary>

  ```json
  {
    "msg": "Internal Server Error!"
  }
  ```

    </details>

---

## GET /schedules/:scheduleId

> Get schedules by Id

- **URL :**
  /schedules

- **Method:** `POST`

- **URL Params :** `scheduleId=[String]`

- **Data Params** `not needed`

- **Success Response:**

    <details>

    <summary> <b> Code: </b> 200  </summary>

  ```json
  {
    "_id": "64a308674bfb61f2db9c7703",
    "userId": 1,
    "scheduleTitle": "http request",
    "startDate": "2021-06-05T17:00:00.000Z",
    "schedules": [
      {
        "task": "Learn the basics of making an HTTP request with JavaScript",
        "complete": false,
        "_id": "64a308674bfb61f2db9c7704"
      },
      {
        "task": "Understand the concepts and terminology related to HTTP requests",
        "complete": false,
        "_id": "64a308674bfb61f2db9c7705"
      },
      {
        "task": "Familiarize yourself with the various options for making an HTTP request in JavaScript",
        "complete": false,
        "_id": "64a308674bfb61f2db9c7706"
      },
      {
        "task": "Learn about the different types of HTTP requests and what they are used for",
        "complete": false,
        "_id": "64a308674bfb61f2db9c7707"
      },
      {
        "task": "Explore methods for sending and receiving data with an HTTP request",
        "complete": false,
        "_id": "64a308674bfb61f2db9c7708"
      },
      {
        "task": "Understand the differences between a synchronous and asynchronous request",
        "complete": false,
        "_id": "64a308674bfb61f2db9c7709"
      },
      {
        "task": "Learn how to handle errors when making an HTTP request",
        "complete": false,
        "_id": "64a308674bfb61f2db9c770a"
      },
      {
        "task": "Write code to make your own HTTP requests in JavaScript",
        "complete": false,
        "_id": "64a308674bfb61f2db9c770b"
      }
    ],
    "__v": 0
  }
  ```

    </details>

- **Error Response:**

    <details>

    <summary> <b> Code: </b> 401 Unauthorized  </summary>

  ```json
  {
    "msg": "Invalid Token"
  }
  ```

    </details>

    <details>

    <summary> <b> Code: </b> 500 Internal Server Error  </summary>

  ```json
  {
    "msg": "Internal Server Error!"
  }
  ```

    </details>

---

## PATCH /schedules/:scheduleId

> Update Task schedules by Id

- **URL :**
  /schedules

- **Method:** `PATCH`

- **URL Params :** `scheduleId=[String]`

- **Data Params**

    <details>

    <summary> <b> Request Body </b> </summary>

  ```json
    {
      taskId: [String]
    }
  ```

    </details>

- **Success Response:**

    <details>

    <summary> <b> Code: </b> 200  </summary>

  ```json
  {
    "msg": "Task successfully updated"
  }
  ```

    </details>

- **Error Response:**

    <details>

    <summary> <b> Code: </b> 401 Unauthorized  </summary>

  ```json
  {
    "msg": "Invalid Token"
  }
  ```

    </details>

    <details>

    <summary> <b> Code: </b> 500 Internal Server Error  </summary>

  ```json
  {
    "msg": "Internal Server Error!"
  }
  ```

    </details>

---

## DELETE /schedules/:scheduleId

> Delete schedules by Id

- **URL :**
  /schedules/:scheduleId

- **Method:** `DELETE`

- **URL Params :** `scheduleId=[String]`

- **Data Params**  `not needed`

- **Success Response:**

    <details>

    <summary> <b> Code: </b> 200  </summary>

  ```json
  {
    "msg": "Success delete schedule with title : http request"
  }
  ```

    </details>

- **Error Response:**

    <details>

    <summary> <b> Code: </b> 401 Unauthorized  </summary>

  ```json
  {
    "msg": "Invalid Token"
  }
  ```

    </details>

    <details>

    <summary> <b> Code: </b> 500 Internal Server Error  </summary>

  ```json
  {
    "msg": "Internal Server Error!"
  }
  ```

    </details>

---

## GET /recommended

> Get recommended schedules

- **URL :**
  /recommended

- **Method:** `GET`

- **URL Params :** `not needed`

- **Data Params**  `not needed`

- **Success Response:**

    <details>

    <summary> <b> Code: </b> 200  </summary>

  ```json
  [
    {
        "_id": "64a30c6b9521152f9f8f73f3",
        "title": "Basic JavaScript",
        "schedules": [
            {
                "task": "Learn the fundamentals of JavaScript",
                "_id": "64a30c6b9521152f9f8f73f4"
            },
            {
                "task": "Understand Data Types & Variables",
                "_id": "64a30c6b9521152f9f8f73f5"
            },...
        ],
        "__v": 0
    },
    {
        "_id": "64a30c849521152f9f8f7409",
        "title": "React",
        "schedules": [Array],
        "__v": 0
    },
    {
        "_id": "64a30e2b9521152f9f8f7457",
        "title": "Vue",
        "schedules": [Array],
        "__v": 0
    },
    {
        "_id": "64a30e889521152f9f8f746d",
        "title": "Express",
        "schedules": [Array],
        "__v": 0
    },
    {
        "_id": "64a30ef09521152f9f8f7479",
        "title": "Node.js",
        "schedules": [Array],
        "__v": 0
    }
  ]
  ```

    </details>

- **Error Response:**

    <details>

    <summary> <b> Code: </b> 401 Unauthorized  </summary>

  ```json
  {
    "msg": "Invalid Token"
  }
  ```

    </details>

    <details>

    <summary> <b> Code: </b> 500 Internal Server Error  </summary>

  ```json
  {
    "msg": "Internal Server Error!"
  }
  ```

    </details>

---

## GET /schedules/:scheduleId/:taskId

> Delete schedules by Id

- **URL :**
  /schedules/:scheduleId/:taskId

- **Method:** `GET`

- **URL Params :** `scheduleId=[String] taskId=[String]`

- **Data Params**  `not needed`

- **Success Response:**

    <details>

    <summary> <b> Code: </b> 200  </summary>

  ```json
  {
    "_id": "64a4457f22edbf56adb44ea5",
    "title": "Learn the basics of making an HTTP request with JavaScript",
    "taskId": "64a308674bfb61f2db9c7704",
    "reference": {
        "youtube": {
            "title": "4 ways to make an api call in JavaScript  | Http requests | JavaScript Tutorials",
            "link": "https://www.youtube.com/watch?v=RG-weA9HUrg"
        },
        "medium": [
            {
                "title": "How to make HTTP requests using Fetch API and Promises | by ...",
                "link": "https://medium.com/@armando_amador/how-to-make-http-requests-using-fetch-api-and-promises-b0ca7370a444",
                "_id": "64a4457f22edbf56adb44ea6"
            },
            {
                "title": "JavaScript XMLHttpRequest — Basics | by Peter Sz | The Startup ...",
                "link": "https://medium.com/swlh/javascript-xmlhttprequest-basics-3da6f7e99dcc",
                "_id": "64a4457f22edbf56adb44ea7"
            },
            {
                "title": "Pitfalls of Promises: 5 Common Mistakes to Avoid in JavaScript ...",
                "link": "https://medium.com/gitconnected/pitfalls-of-promises-5-common-mistakes-to-avoid-in-javascript-programming-b3b3e87a7fef?source=user_profile---------0----------------------------",
                "_id": "64a4457f22edbf56adb44ea8"
            },
            {
                "title": "Curl Simplified: A Beginner's Guide for JavaScript Developers | by ...",
                "link": "https://medium.com/geekculture/curl-simplified-a-beginners-guide-for-javascript-developers-db981b77c328",
                "_id": "64a4457f22edbf56adb44ea9"
            },
            {
                "title": "How to learn JavaScript using ChatGPT-4? | by Apes Ascendance ...",
                "link": "https://medium.com/javascript-quantum/tihow-to-learn-javascript-using-chatgpt-4-4b079717bb9d?source=user_profile---------7----------------------------",
                "_id": "64a4457f22edbf56adb44eaa"
            }
        ],
        "w3schools": [
            {
                "title": "XML HttpRequest",
                "link": "https://www.w3schools.com/xml/xml_http.asp",
                "_id": "64a4457f22edbf56adb44eab"
            },
            {
                "title": "HTTP Methods GET vs POST",
                "link": "https://www.w3schools.com/tags/ref_httpmethods.asp",
                "_id": "64a4457f22edbf56adb44eac"
            },
            {
                "title": "AJAX Introduction",
                "link": "https://www.w3schools.com/xml/ajax_intro.asp",
                "_id": "64a4457f22edbf56adb44ead"
            },
            {
                "title": "What is HTTP",
                "link": "https://www.w3schools.com/whatis/whatis_http.asp",
                "_id": "64a4457f22edbf56adb44eae"
            },
            {
                "title": "JSON Introduction",
                "link": "https://www.w3schools.com/js/js_json_intro.asp",
                "_id": "64a4457f22edbf56adb44eaf"
            }
        ],
        "freecodecamp": [
            {
                "title": "Here are the most popular ways to make an HTTP request in ...",
                "link": "https://www.freecodecamp.org/news/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa/",
                "_id": "64a4457f22edbf56adb44eb0"
            },
            {
                "title": "JavaScript Get Request – How to Make an HTTP Request in JS",
                "link": "https://www.freecodecamp.org/news/javascript-get-request-tutorial/",
                "_id": "64a4457f22edbf56adb44eb1"
            },
            {
                "title": "HTTP Networking in JavaScript – Handbook for Beginners",
                "link": "https://www.freecodecamp.org/news/http-full-course/",
                "_id": "64a4457f22edbf56adb44eb2"
            },
            {
                "title": "JavaScript Post Request – How to Send an HTTP Post Request in JS",
                "link": "https://www.freecodecamp.org/news/javascript-post-request-how-to-send-an-http-post-request-in-js/",
                "_id": "64a4457f22edbf56adb44eb3"
            },
            {
                "title": "HTTP Request Methods – Get vs Put vs Post Explained with Code ...",
                "link": "https://www.freecodecamp.org/news/http-request-methods-explained/",
                "_id": "64a4457f22edbf56adb44eb4"
            }
        ],
        "jst": [
            {
                "title": "XMLHttpRequest",
                "link": "https://javascript.info/xmlhttprequest",
                "_id": "64a4457f22edbf56adb44eb5"
            },
            {
                "title": "JavaScript Fetch API Explained By Examples",
                "link": "https://www.javascripttutorial.net/javascript-fetch-api/",
                "_id": "64a4457f22edbf56adb44eb6"
            },
            {
                "title": "Fetch",
                "link": "https://javascript.info/fetch",
                "_id": "64a4457f22edbf56adb44eb7"
            },
            {
                "title": "The Modern JavaScript Tutorial",
                "link": "https://javascript.info/",
                "_id": "64a4457f22edbf56adb44eb8"
            },
            {
                "title": "WebSocket",
                "link": "https://javascript.info/websocket",
                "_id": "64a4457f22edbf56adb44eb9"
            }
        ]
    },
    "quiz": [
        {
            "question": "What does HTTP stand for?",
            "choices": [
                "Hypertext Transfer Protocol",
                "High Transferability Protocol",
                "Hypertext Transfer Path",
                "Hypertext Transport Protocol"
            ],
            "answer": 0,
            "_id": "64a4457f22edbf56adb44eba"
        },
        {
            "question": "What is the default port used for HTTP?",
            "choices": [
                "80",
                "2121",
                "443",
                "8080"
            ],
            "answer": 0,
            "_id": "64a4457f22edbf56adb44ebb"
        },
        {
            "question": "Which of the following is an example of an HTTP request?",
            "choices": [
                "GET / HTTP/1.1",
                "POST / HTTP/1.1",
                "GET /www.example.com/index.html HTTP/1.1",
                "POST /www.example.com/index.html HTTP/1.1"
            ],
            "answer": 2,
            "_id": "64a4457f22edbf56adb44ebc"
        },
        {
            "question": "Which of the following can be used to make an HTTP request with JavaScript?",
            "choices": [
                "XMLHttpRequest",
                "Document Object Model",
                "JSON Parser",
                "Node.js"
            ],
            "answer": 0,
            "_id": "64a4457f22edbf56adb44ebd"
        },
        {
            "question": "Which of the following is not a valid HTTP response status code?",
            "choices": [
                "200 OK",
                "304 Not Modified",
                "400 Bad Request",
                "500 Internal Server Error"
            ],
            "answer": 3,
            "_id": "64a4457f22edbf56adb44ebe"
        }
    ],
    "__v": 0
  }
  ```

    </details>

- **Error Response:**

    <details>

    <summary> <b> Code: </b> 401 Unauthorized  </summary>

  ```json
  {
    "msg": "Invalid Token"
  }
  ```

    </details>

    <details>

    <summary> <b> Code: </b> 404 Unauthorized  </summary>

  ```json
  {
    "msg": "Id not found",
  }
  OR
  {
    "msg": "Task id not found",
  }
  OR
  {
    "msg": "Schedule id not found",
  }
  ```

    </details>

    <details>

    <summary> <b> Code: </b> 500 Internal Server Error  </summary>

  ```json
  {
    "msg": "Internal Server Error!"
  }
  ```

    </details>

---