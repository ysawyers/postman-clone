import React, { useState, useEffect } from 'react';
import ReactJson from 'react-json-view';
import JSONInput from 'react-json-editor-ajrm';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles({});

const Postman = () => {
  const [requestAddress, setRequestAddress] = useState('');
  const [requestType, setRequestType] = useState('get');
  const [requestBody, setRequestBody] = useState({});
  const [response, setResponse] = useState({});
  const [savedQueries, setSavedQueries] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/user-queries', {
        headers: {
          authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => {
        console.log(res.data);
        setSavedQueries(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmit = async () => {
    const body = JSON.stringify(requestBody);
    switch (requestType) {
      case 'get':
        await axios
          .get(requestAddress)
          .then((res) => {
            setResponse(res.data);
          })
          .catch((error) => {
            setResponse(error);
          });
        break;
      case 'post':
        await axios
          .post(requestAddress, body)
          .then((res) => {
            setResponse(res.data);
          })
          .catch((error) => {
            setResponse(error);
          });
        break;
      case 'put':
        await axios
          .put(requestAddress, body)
          .then((res) => {
            setResponse(res.data);
          })
          .catch((error) => {
            setResponse(error);
          });
        break;
      case 'delete':
        await axios
          .delete(requestAddress)
          .then((res) => {
            setResponse(res.data);
          })
          .catch((error) => {
            setResponse(error);
          });
        break;
    }
  };

  const saveQuery = (index: any) => {
    // @ts-ignore
    setRequestAddress(savedQueries[index].requestaddress);
  };

  const styles = useStyles();
  return (
    <div className='Postman'>
      <form
        style={{ display: 'flex', marginTop: '2em' }}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <select
          name='requestType'
          onChange={(e) => {
            setRequestType(e.target.value);
          }}
          value={requestType}
        >
          <option value='get'>GET</option>
          <option value='post'>POST</option>
          <option value='put'>PUT</option>
          <option value='delete'>DELETE</option>
        </select>
        <input
          style={{ width: '100%' }}
          placeholder='Enter request URL'
          onChange={(e) => {
            setRequestAddress(e.target.value);
          }}
          value={requestAddress}
        ></input>
        <button type='button' onClick={onSubmit}>
          Send
        </button>
      </form>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '80%', border: '1px solid black', marginTop: '2em' }}>
          <textarea
            value={String(requestBody)}
            onChange={(e) => {
              setRequestBody(e.target.value);
            }}
          ></textarea>
        </div>
      </div>
      <button
        style={{ marginTop: '2em' }}
        onClick={() => {
          const body = JSON.stringify(requestBody);
          const data = {
            requestAddress,
            requestType,
            body,
          };
          axios
            .post('http://127.0.0.1:5000/api/save-query', data, {
              headers: {
                authorization: localStorage.getItem('token'),
              },
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        Save Query
      </button>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '80%', border: '1px solid black', marginTop: '2em' }}>
          <ReactJson src={response} theme='bright:inverted' displayDataTypes={false} displayObjectSize={false} />
        </div>
      </div>
      <div style={{ marginTop: '2em' }}>
        <h1>Saved Queries</h1>
        {savedQueries.map((value, index) => {
          return (
            <div style={{ marginTop: '1em' }} key={index}>
              {/* @ts-ignore */}
              <p>Request Address - {savedQueries[index].requestaddress}</p>
              {/* @ts-ignore */}
              <p>Request Type - {savedQueries[index].requesttype}</p>
              {/* @ts-ignore */}
              <p>Request Body - {savedQueries[index].requestbody}</p>
              <button
                type='button'
                onClick={() => {
                  saveQuery(index);
                }}
              >
                Use Request
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Postman;
