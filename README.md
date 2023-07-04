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
