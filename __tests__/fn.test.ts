import {Base64Decode, deserialize, generateId} from "../src/utils";
import { countryList } from "../src/utils/country";
import { getVcList, sendUserInfo } from "../src/api";
import { initTest } from "../src";
import { userInfo } from './info'
import Web3 from 'web3';
import { Claim } from 'ontology-ts-sdk'

describe("test user info", () => {
  test("send user info", async () => {
    const ownerDid = generateId('0x5c7b386B2B8779304E701CbBE22a53671446629b');
    let result = await sendUserInfo({ ...userInfo, ownerDid }, '521113c1-9e5b-4d00-b137-c91ecad424ff');
    console.log('result', result)
    expect(initTest).toBe('hi, boy!');
  }, 30000)
  test("get user vc", async () => {
    const accountId = generateId('0x5c7b386B2B8779304E701CbBE22a53671446629b');
    const result = await getVcList(accountId);
    console.log('result', result);
    expect(initTest).toBe('hi, boy!');
  })
})

describe("test country list", () => {
  test("produce all dessert", () => {
    console.log(countryList);
    expect(initTest).toBe('hi, boy!');
  })
})

describe("test verify sign", () => {
  test("test verify sign", async () => {
    const web3 = new Web3(Web3.givenProvider);
    let result = await web3.eth.accounts.recover('Some data', '0xb91467e570a6466aa9e9876cbcd013baba02900b8979d43fe208a4a4f339f5fd6007e74cd82e037b800186422fc2da167c747ef045e5d18a5f5d4300f8e1a0291c');
    console.log('result', result);
    expect(initTest).toBe('hi, boy!');
  })
})

describe("test sign msg", () => {
  test("test verify msg", async () => {
    const web3 = new Web3(Web3.givenProvider);
    const result = await web3.eth.accounts.sign('Some data', '39c5f2a46ba73c830116501caf71710fb8357200740ddda5fe60c26931a06faf');
    console.log('result', result);
    expect(initTest).toBe('hi, boy!');
  })
})

describe("test sign eth msg", () => {
  test("test verify eth msg", async () => {
    const web3 = new Web3(Web3.givenProvider);
    const result = await web3.eth.sign("Hello world", "0x5c7b386b2b8779304e701cbbe22a53671446629b")
    console.log('result', result);
    expect(initTest).toBe('hi, boy!');
  })
})

describe("test sign verify message", () => {
  test("test sign verify message", async () => {
     let str = 'eyJraWQiOiJkaWQ6b250OkFQYzhGQmRHWWR6RHRXckZwOHEyQlNVRlgySEFuQnVCbmEja2V5cy0xIiwidHlwIjoiSldULVgiLCJhbGciOiJPTlQtRVMyNTYifQ==.eyJjbG0tcmV2Ijp7InR5cCI6IkF0dGVzdENvbnRyYWN0IiwiYWRkciI6IjM2YmI1YzA1M2I2YjgzOWM4ZjZiOTIzZmU4NTJmOTEyMzliOWZjY2MifSwic3ViIjoiZGlkOm9udDpBS0c5TlRIZGV0Ynh0cUR4Wm11azRTYlNoekFYb3p1Nmo3IiwidmVyIjoidjEuMCIsImNsbSI6eyJOYXRpb25hbGl0eSI6IkJFIiwiTmFtZSI6IkhTVUFOWUFORyIsIkJpcnRoRGF5IjoiMTk5NC0wMy0wOSIsIkV4cGlyYXRpb25EYXRlIjoiMjAyMi0wMy0xMiIsIklERG9jTnVtYmVyIjoiRU0yNjAzODYiLCJJc3N1ZXJOYW1lIjoiU2h1ZnRpcHJvIn0sImlzcyI6ImRpZDpvbnQ6QVBjOEZCZEdZZHpEdFdyRnA4cTJCU1VGWDJIQW5CdUJuYSIsImV4cCI6MTYyODg1NTU0NSwiaWF0IjoxNTk3MzE5NTQ2LCJAY29udGV4dCI6ImNyZWRlbnRpYWw6c2ZwX3Bhc3Nwb3J0X2F1dGhlbnRpY2F0aW9uIiwianRpIjoiYjdhMDAyNDZmOTk1MDhmZWNlNTMxNDM4ZjEwZjU1YWU2MGM4M2VmMTFkMjQwZjg3M2RjNDNjMmVjMjk0OGExNCJ9.Ads7y0bkRN4yl7ei8RvVJDW2hA6oPbGyRRfU+7N6GW9TMb6QLicz0wDONmyCUsBK9kMkaQQIsMfBXXdJ8EulVmk=\.eyJUeXBlIjoiTWVya2xlUHJvb2YiLCJNZXJrbGVSb290IjoiODQzNWJjMzkzZDRiOTU0OGQwMmExNGQ3NzBiNTMyYjI1YzNhYzAwYTMwOWUwNzU4ODMyMTc4M2Q2MmRmYmIzZiIsIlR4bkhhc2giOiI3N2I1YWZjMzBjYmZlYmU2OWU4MGQxZjZmNjQwYTZjM2ZkNGRjODNiNTY0YmJiZmRhYTY4MTA4Y2FmYWQ5YmQ3IiwiQmxvY2tIZWlnaHQiOjEzMzgyNjk1LCJOb2RlcyI6W3siVGFyZ2V0SGFzaCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAiLCJEaXJlY3Rpb24iOiJMZWZ0In0seyJUYXJnZXRIYXNoIjoiNzdjNWRiZmJjYTI3Y2NkZWNlNzY1ZWMwNTgzNmM1NjFhNTcxZjAxOGJmZGVlZDc4YjdkMmFlZWNkMDk4MDdhZSIsIkRpcmVjdGlvbiI6IkxlZnQifSx7IlRhcmdldEhhc2giOiJlMTQxNzJjOGE2ZTE5Mzk0MzQ2NTY0OGUxYzU4NmE5MTg2YTM3ODRlZTdlZTI5ZGI5ZWRiZjZhZmUwNGY1MzkwIiwiRGlyZWN0aW9uIjoiTGVmdCJ9LHsiVGFyZ2V0SGFzaCI6IjY1MzZlZTViY2IzYzQwMjM2ZGY3NTE0MmU4MDI5ODQxODAwN2Q4YzIxNGIwOGYyYWM3YjVlNmYwMWE3MWJhMTkiLCJEaXJlY3Rpb24iOiJMZWZ0In0seyJUYXJnZXRIYXNoIjoiOGY4NTRjMTRhYjQyMmVmOWRlZmJhZWJmNTViOGJmOTNkM2VlMDYxMGYwNjExMTVjYjg1OTk0MzhlMjQ4NWMwNyIsIkRpcmVjdGlvbiI6IkxlZnQifSx7IlRhcmdldEhhc2giOiJkYmI4MTFhZmJmMmI3NWI3Y2M5YTE5MTg5NzRmN2Q1NjhkYWI4MzJjNTI3ZmI5Mjc1NjAwYWM0ZTkyYzQwN2Y5IiwiRGlyZWN0aW9uIjoiTGVmdCJ9LHsiVGFyZ2V0SGFzaCI6IjZiZmM0NWFiNjc5Nzc0ZjhkNDFjM2IwOGM0NDY0YTRhMzkxYjczNjZjZDEwMTkxZWYyMjJmNDkwMTc3N2ZhYzYiLCJEaXJlY3Rpb24iOiJMZWZ0In0seyJUYXJnZXRIYXNoIjoiZjYxNjIwNzk0Yjg5OTYxZmQ3NzA5NTNlYjFkYWZkM2QyNjdlODFlN2Q3NmMxZjc1MjgwNDMyMTBlN2M4ODAzYyIsIkRpcmVjdGlvbiI6IkxlZnQifSx7IlRhcmdldEhhc2giOiIzZTBhOWM2MzU1ZGM1YjM5ZDE5NGIwNDliMWQ4YmIyMzM1Y2I5NzMzMWUxNDQ3YzkzYWYzYWNiODE4NmY1YjQ4IiwiRGlyZWN0aW9uIjoiTGVmdCJ9LHsiVGFyZ2V0SGFzaCI6IjM1MjYzMzRhYmQ3NzBkOTIxMWQ5Y2I1Y2RlYzAyY2JlMTZlMTFjOTcwYWRkZjkyODdhYWFmNmMxYTIwMjBiZTciLCJEaXJlY3Rpb24iOiJMZWZ0In0seyJUYXJnZXRIYXNoIjoiOGVlMGRhMzZmOTE4YTEzM2VjZDJiNjFiZDRkN2FjMmQ2NTYxZjA4YWFiZTFlNjQ5ZTFiOTExMGJlYTdkNjQ3NSIsIkRpcmVjdGlvbiI6IkxlZnQifV0sIkNvbnRyYWN0QWRkciI6IjM2YmI1YzA1M2I2YjgzOWM4ZjZiOTIzZmU4NTJmOTEyMzliOWZjY2MifQ=='
    let a = Claim.deserialize(str)
    console.log('a', a)
    expect(initTest).toBe('hi, boy!');
  })
  test("test decode message", async () => {
    let str = 'eyJhbGciOiJFUzI1NiIsImtpZCI6ImRpZDpvbnQ6QVBjOEZCZEdZZHpEdFdyRnA4cTJCU1VGWDJIQW5CdUJuYSNrZXlzLTEiLCJ0eXAiOiJKV1QifQ==.eyJpc3MiOiJkaWQ6b250OkFQYzhGQmRHWWR6RHRXckZwOHEyQlNVRlgySEFuQnVCbmEiLCJleHAiOjE2NTM2MjIwNjcsIm5iZiI6MTYyMjA4NjA2NywiaWF0IjoxNjIyMDg2MDY3LCJqdGkiOiJ1cm46dXVpZDo5ZGFhYmNkYi1jYTI2LTRjODYtODQyNS1kNGRkMjQ1YzI4YmYiLCJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSIsImh0dHBzOi8vb250aWQub250LmlvL2NyZWRlbnRpYWxzL3YxIiwiY3JlZGVudGlhbDpzZnBfcGFzc3BvcnRfYXV0aGVudGljYXRpb24iXSwidHlwZSI6WyJWZXJpZmlhYmxlQ3JlZGVudGlhbCJdLCJjcmVkZW50aWFsU3ViamVjdCI6eyJOYW1lIjoiSFNVQU4gWUFORyIsIkJpcnRoRGF5IjoiMTk5NC0wMy0wOSIsIkV4cGlyYXRpb25EYXRlIjoiMjAyMi0wMy0xMiIsIklERG9jTnVtYmVyIjoiRU0yNjAzODYiLCJJc3N1ZXJOYW1lIjoiU2h1ZnRpcHJvIiwidXNlcl9kaWQiOiJkaWQ6b250OjVjN2IzODZCMkI4Nzc5MzA0RTcwMUNiQkUyMmE1MzY3MTQ0NjYyOWIifSwiY3JlZGVudGlhbFN0YXR1cyI6eyJpZCI6IjRmN2YxNTlhYzRiOTkxM2JiMTg1ZmRmMTg5NTcwNWY2MWI3ZDBjYzYiLCJ0eXBlIjoiQXR0ZXN0Q29udHJhY3QifSwicHJvb2YiOnsiY3JlYXRlZCI6IjIwMjEtMDUtMjdUMDM6Mjc6NDdaIiwicHJvb2ZQdXJwb3NlIjoiYXNzZXJ0aW9uTWV0aG9kIn19fQ==.AbHL+YiTNeBncr85G7uQFKGZGtmv/hHuNxK2PurjtvYxpqQkSggWDIZaa1B2JVrhjlSI8U6tBTBr/ZmGtfTGZnc=\\.eyJUeXBlIjoiTWVya2xlUHJvb2YiLCJNZXJrbGVSb290IjoiZDA5N2VmNDk1YWMyZmNmMGFiOTNlOGQ5OTQ3ZTgzMjZkOTA0MzNkNzAwN2VhNTIwMzk0ZjQ3NjhkN2VlN2U2OSIsIlR4bkhhc2giOiI4ZTQ0ZjI2YWUzOGFjNDU3OTZiMTc3ZjVjZTFhYTExYTcwZjE0ZDJhNzQ5YjlmYzFmNWI4ZmNjZDlkMTkyYWQzIiwiQmxvY2tIZWlnaHQiOjE2MDIyNjAyLCJOb2RlcyI6W3siVGFyZ2V0SGFzaCI6Ijc3YzVkYmZiY2EyN2NjZGVjZTc2NWVjMDU4MzZjNTYxYTU3MWYwMThiZmRlZWQ3OGI3ZDJhZWVjZDA5ODA3YWUiLCJEaXJlY3Rpb24iOiJMZWZ0In0seyJUYXJnZXRIYXNoIjoiNDBmZWM3NDFlYjc4NmI1ZjI5YmI3YTY0ZjAxMTlmYmRiZjEwOGY3YjJhYTU2ODc0YmMzODcyMWQ4NzkzNGRjNSIsIkRpcmVjdGlvbiI6IkxlZnQifSx7IlRhcmdldEhhc2giOiIwMjZkOGI4OTI0MWNhOTAyMjMzODY4MmI3YWM0NzBiNzk5YTg4M2NlMTUwOTE1ZGEzZjVkNTdiZDhmOGFkZjg5IiwiRGlyZWN0aW9uIjoiTGVmdCJ9LHsiVGFyZ2V0SGFzaCI6IjcwNmI5OTU1OTY3ZDdkNDBkOWE4ZjYyMzcxNDE5NjAzMDAzOTAyY2FjOTNkYTAyZGQzM2I1Y2U1YWYxNmQyZWYiLCJEaXJlY3Rpb24iOiJMZWZ0In0seyJUYXJnZXRIYXNoIjoiOTg4YmIzMDM1YTliZGNmMzI5NWQ2YTMzMjY4NDNkNTM5NDUxZjg3Yjk1MmI0ZjI2ZTM3NDc3NDJlNjgyODYyMCIsIkRpcmVjdGlvbiI6IkxlZnQifSx7IlRhcmdldEhhc2giOiJhMTlkYzFlZGJlNTk0YWY0ODE4ODU1ODBiZDE2NWRhMGQ3MzU2YzdiYjMzYjA5NjQxZWY4OTBmNGY4NThlMmFiIiwiRGlyZWN0aW9uIjoiTGVmdCJ9LHsiVGFyZ2V0SGFzaCI6ImJlNjNlODhhZDRjODYwZDg3MjhmZTBhODliNDQxMjg0MzRkNmI3MjEyMTI5MTA4YzlhYzBmODhlMzMwNDFhZDUiLCJEaXJlY3Rpb24iOiJMZWZ0In0seyJUYXJnZXRIYXNoIjoiNzk3NWEyOTA3YzJmN2ZmZTgzZDUzMWMxOGExNWU3ZWI0MWFjNDE1NjM4YzA0NzEzZDNhNGY4MTI1YTAxYzc2OSIsIkRpcmVjdGlvbiI6IkxlZnQifSx7IlRhcmdldEhhc2giOiI2ZTEyZjdhMTM1ZjgxMDVlZjZlODQzNzAwOTE0MzI4YmEyNjBhZDFkYzcwZDFhOTMyYzA1YmEwMzA2OWYyZDdkIiwiRGlyZWN0aW9uIjoiTGVmdCJ9LHsiVGFyZ2V0SGFzaCI6IjlhNDQzM2RhODUyMjlhZGI0ZjI5N2NmMDFiZTZhNTU0Y2FmMjg3NGVlZmE3NjlkMjY0MTk5NGQ3YjYxNzk4M2EiLCJEaXJlY3Rpb24iOiJMZWZ0In0seyJUYXJnZXRIYXNoIjoiNTY0NzYxNGIwZjEzNTVlZjc0MWFkZTc1OTRmMmZhNTQ5NWY0MmI0NGVjYzZlNDgyZDU5ZTA2MTg5MjJkY2Q0NiIsIkRpcmVjdGlvbiI6IkxlZnQifSx7IlRhcmdldEhhc2giOiIzNTI2MzM0YWJkNzcwZDkyMTFkOWNiNWNkZWMwMmNiZTE2ZTExYzk3MGFkZGY5Mjg3YWFhZjZjMWEyMDIwYmU3IiwiRGlyZWN0aW9uIjoiTGVmdCJ9LHsiVGFyZ2V0SGFzaCI6IjhlZTBkYTM2ZjkxOGExMzNlY2QyYjYxYmQ0ZDdhYzJkNjU2MWYwOGFhYmUxZTY0OWUxYjkxMTBiZWE3ZDY0NzUiLCJEaXJlY3Rpb24iOiJMZWZ0In1dLCJDb250cmFjdEFkZHIiOiIzNmJiNWMwNTNiNmI4MzljOGY2YjkyM2ZlODUyZjkxMjM5YjlmY2NjIn0=';
    let arr = str.split('.');
    console.log('arr', arr);
    arr.map(item => {
      const result = Base64Decode(item);
      console.log('result', result)
    })
    expect(initTest).toBe('hi, boy!');
  })
  test("test deserialize str", async () => {
    let str = 'eyJhbGciOiJFUzI1NiIsImtpZCI6ImRpZDpvbnQ6QVBjOEZCZEdZZHpEdFdyRnA4cTJCU1VGWDJIQW5CdUJuYSNrZXlzLTEiLCJ0eXAiOiJKV1QifQ==.eyJpc3MiOiJkaWQ6b250OkFQYzhGQmRHWWR6RHRXckZwOHEyQlNVRlgySEFuQnVCbmEiLCJleHAiOjE2NTM3MjE0NjMsIm5iZiI6MTYyMjE4NTQ2MywiaWF0IjoxNjIyMTg1NDYzLCJqdGkiOiJ1cm46dXVpZDo4NjFjYmFlNC1jM2Y4LTQ4NDQtOTNkNS04YzgyNWNlZDcwNTIiLCJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSIsImh0dHBzOi8vb250aWQub250LmlvL2NyZWRlbnRpYWxzL3YxIiwiY3JlZGVudGlhbDpzZnBfcGFzc3BvcnRfYXV0aGVudGljYXRpb24iXSwidHlwZSI6WyJWZXJpZmlhYmxlQ3JlZGVudGlhbCJdLCJjcmVkZW50aWFsU3ViamVjdCI6eyJOYW1lIjoiSFNVQU4gWUFORyIsIkJpcnRoRGF5IjoiMTk5NC0wMy0wOSIsIkV4cGlyYXRpb25EYXRlIjoiMjAyMi0wMy0xMiIsIklERG9jTnVtYmVyIjoiRU0yNjAzODYiLCJJc3N1ZXJOYW1lIjoiU2h1ZnRpcHJvIiwidXNlcl9kaWQiOiJkaWQ6b250OjVjN2IzODZCMkI4Nzc5MzA0RTcwMUNiQkUyMmE1MzY3MTQ0NjYyOWIifSwiY3JlZGVudGlhbFN0YXR1cyI6eyJpZCI6IjRmN2YxNTlhYzRiOTkxM2JiMTg1ZmRmMTg5NTcwNWY2MWI3ZDBjYzYiLCJ0eXBlIjoiQXR0ZXN0Q29udHJhY3QifSwicHJvb2YiOnsiY3JlYXRlZCI6IjIwMjEtMDUtMjhUMDc6MDQ6MjNaIiwicHJvb2ZQdXJwb3NlIjoiYXNzZXJ0aW9uTWV0aG9kIn19fQ==.ARyjaIxBhT3n6/KcV0dqHZhng8EVrt5k9Lh+94UiTx3GDisGMJdFE/4erXIazh3n8ipPotTFA+Z4hS09GlhVaio=\\.eyJUeXBlIjoiTWVya2xlUHJvb2YiLCJNZXJrbGVSb290IjoiMzM5NTcxY2FkODE3NmM1Y2Y3NDhjMjViZDRlMGI4YmZjMGFjOThhMTc1YjdhMDNjMWQ0NDIzMjg1NjU4MzIxNiIsIlR4bkhhc2giOiI5NDk0NTY4MzM2YTRjMjM5OWEzN2JjZmU3MWY0MmE4MjY5YTg4NjQ1NGJhMDkzNWUxYmFhMDY2ZTE1ODVmZTQ3IiwiQmxvY2tIZWlnaHQiOjE2MDI0NDQ3LCJOb2RlcyI6W3siVGFyZ2V0SGFzaCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAiLCJEaXJlY3Rpb24iOiJMZWZ0In0seyJUYXJnZXRIYXNoIjoiNzdjNWRiZmJjYTI3Y2NkZWNlNzY1ZWMwNTgzNmM1NjFhNTcxZjAxOGJmZGVlZDc4YjdkMmFlZWNkMDk4MDdhZSIsIkRpcmVjdGlvbiI6IkxlZnQifSx7IlRhcmdldEhhc2giOiIwY2QwYTZiYWI3NzlkODdjZjE5NThmYTNhOGUzYzE5ZTMxNTkxZGUzMjUxZmVjNGVlNmY2ZDdiMzllYTFmZjYwIiwiRGlyZWN0aW9uIjoiTGVmdCJ9LHsiVGFyZ2V0SGFzaCI6ImY0NDA1MzE5OTljNTQ3ZGIwOGY1MTY2NzdjMTUyMjE1NDc1YTY5ZGNjYjgyMTc2ZTRiY2ExYjcyNjI2MWExYmUiLCJEaXJlY3Rpb24iOiJMZWZ0In0seyJUYXJnZXRIYXNoIjoiYTExNDE3Nzk5ZjY4NWMxNjcxNTVjNzhjYWJjY2ZkZjZkMDhkNjNiZTIzYTUzZjY3MjgxNzlkOGE2ZTZjMDViNyIsIkRpcmVjdGlvbiI6IkxlZnQifSx7IlRhcmdldEhhc2giOiI3NGI5Mjc0MGU4MmU1MDhjYzAyNjQ4YWI0OWUyMWUxY2FiYzQzYWU1M2Q3MzljYTI4ZGJkZmI3MGZlZDEwM2JjIiwiRGlyZWN0aW9uIjoiTGVmdCJ9LHsiVGFyZ2V0SGFzaCI6IjhhZTIyZDYyNzM2ZjQ4MTJkZWM1NzcxMzVjY2FmN2Y5NGJhNzQ5NGQ4ZWE2Nzg0ODMxMTM4MmMxOTExOGMyYzkiLCJEaXJlY3Rpb24iOiJMZWZ0In0seyJUYXJnZXRIYXNoIjoiOGU3NGQ2YzY3MjQwZDdkYjVlNjg1NmI0YzZkOTQ5NDkyMjlkMjZjOThlOGY0Nzc0ZGJiNzdkN2U0NjViNjliYSIsIkRpcmVjdGlvbiI6IkxlZnQifSx7IlRhcmdldEhhc2giOiIxOWM5YWEwMGM0N2ZhYmQ2OWZmYzNhYjg4ODFmNjAwZmI1M2Y5Y2NlNzUxNmI0ZmU2ODgyZDE0ZjY0OTEzYzg5IiwiRGlyZWN0aW9uIjoiTGVmdCJ9LHsiVGFyZ2V0SGFzaCI6ImI0YWFkNTg5OWNiNjcyZGFiOWFkMGMxNTFiNDU4ODUxNmI0MWNkYjNkMzEzNDY0MjUyZDIyMDc1YWE0Nzc1MTYiLCJEaXJlY3Rpb24iOiJMZWZ0In0seyJUYXJnZXRIYXNoIjoiNmUxMmY3YTEzNWY4MTA1ZWY2ZTg0MzcwMDkxNDMyOGJhMjYwYWQxZGM3MGQxYTkzMmMwNWJhMDMwNjlmMmQ3ZCIsIkRpcmVjdGlvbiI6IkxlZnQifSx7IlRhcmdldEhhc2giOiI5YTQ0MzNkYTg1MjI5YWRiNGYyOTdjZjAxYmU2YTU1NGNhZjI4NzRlZWZhNzY5ZDI2NDE5OTRkN2I2MTc5ODNhIiwiRGlyZWN0aW9uIjoiTGVmdCJ9LHsiVGFyZ2V0SGFzaCI6IjU2NDc2MTRiMGYxMzU1ZWY3NDFhZGU3NTk0ZjJmYTU0OTVmNDJiNDRlY2M2ZTQ4MmQ1OWUwNjE4OTIyZGNkNDYiLCJEaXJlY3Rpb24iOiJMZWZ0In0seyJUYXJnZXRIYXNoIjoiMzUyNjMzNGFiZDc3MGQ5MjExZDljYjVjZGVjMDJjYmUxNmUxMWM5NzBhZGRmOTI4N2FhYWY2YzFhMjAyMGJlNyIsIkRpcmVjdGlvbiI6IkxlZnQifSx7IlRhcmdldEhhc2giOiI4ZWUwZGEzNmY5MThhMTMzZWNkMmI2MWJkNGQ3YWMyZDY1NjFmMDhhYWJlMWU2NDllMWI5MTEwYmVhN2Q2NDc1IiwiRGlyZWN0aW9uIjoiTGVmdCJ9XSwiQ29udHJhY3RBZGRyIjoiMzZiYjVjMDUzYjZiODM5YzhmNmI5MjNmZTg1MmY5MTIzOWI5ZmNjYyJ9';
    let arr = deserialize(str);
    console.log('arr', arr);
    expect(initTest).toBe('hi, boy!');
  })
})