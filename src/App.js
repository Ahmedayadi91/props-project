import Bio from './profile/bio'
import FullName from './profile/FullName'
import Profession from './profile/profession'
import './App.css';

function App() {
  return (
    <div className="App">
     {/* <Bio bios="bonjour, je suis" > <FullName name="Ali Jouini"/>  j'ai 26 ans et je suis <Profession job ="Engineer" /> </Bio> */}
     <div className="ali">
        <Bio bios="bonjour, je suis " > </Bio>
        <FullName name=" Ali Jouini " />
        <h1>  j'ai 26 ans et je suis </h1>
        <Profession job =" Engineer"  imag="https://www.tekiano.com/wp-content/uploads/2021/04/GOOGLE-DOODLE-Nour-el-sherif.jpg"/>
     </div>
     <div className="skander">
        <Bio bios="bonjour, je suis " > </Bio>
        <FullName name=" Skander Hamdi " />
        <h1>  j'ai 45 ans et je suis </h1>
        <Profession job =" teacher"  imag="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFhYYGRgaGBoaGhgaHBoaGBgYGhoZGRgaGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzYsJCs0NDQ2NDQ0NzQ1NDU2NDQ2PTQ0NDQ0NDQ0NDQ0NDQ0NTQ0NDQ0NDQ0NDQ0NDQ0NDQ0Nv/AABEIAL4BCgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAECBQYAB//EADwQAAICAAQEBAMGBQMEAwEAAAECABEDEiExBEFRYQUicYEykaEGE0JSscFicpLR8BQV4SOCorIWM9IH/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EACkRAAICAQUBAAAEBwAAAAAAAAABAhEDBBIhMUFRInGRsQUTFDJSYYH/2gAMAwEAAhEDEQA/APmMmengJBiek1JnoAenp6eqAEyKk1LZTV0a2vlfS/cQFZWpMmpIEBWRUkCWAkhYAVAlgksFjGDglg1fhXMfQEDT5wABUuqy+WSqwFaKBJYJC5ZOWFi3Ais8Vhak5YWG4HlkAQ4SeOHFuFuAlZBWP8PwTvoqk9+UOfBcUmgpJ6Rbom0cWRq0jIqQVjnE8I+GcroynuKv06wOWUmmRK4umqA1KskOVlCsAA5YOowVlSsAAMJWoUiVYwAGRK1LmRUAsFUmenoFFsNCzBRuSAL01O2sk4TeaxWU0dRobqu8rUd45gQBfmsnE7vzO+or63AQkBJjuJhqdAqDTcPYvrRMng3rTMoKuj2eeW7o/tzgKxJVvQRzEwHCIrCrd6ugL8gOvt7fORw7LnLFsupI8pN2djroKJhnKFMt0oN6K1BiOVtQ/wCIAKPgFbvQhipHcbyoEdxGV6Bc6fwbnQEmibNc+0G2EgGj2emUgV6mAAAsuFj/AA/CuEfyNqF1ynQZgd+XKRg4GVsrruCBf4SdA3seveFibFAsd4bh3yO2U5cm+1+ZP2lcfhsmUEHNVkdLJr6C/eP4OCWoDIWy5bzMbUDoNDQ/9YrJbszRhHKWrQEC+5sgfQy+LghSBd2qtdfmANe1xzBwkAIZ1IPZxqLo3Xc/OexMNGti420UKeQAA1qvXtJJE1nssMuHLZIDsEFlslwoSW+6gKwIWdj9lfsyroMfGFhv/rTkR+duo6D3nL4PC52VObMF+Zr959eChSFUUFAUDkABQHyEicqR2aPEpycn4Z/D+FquyAQo4JV1oXNJUlcZNJlXp6yfNHPeK8ImIhR1DA/MHqOhnzbi+HyOyHWtj1E+pcYpoz559otcQE+ntDHL8VGOqwqUG/UY7LKMkaOHygyk6UzxRcrKOO8OVgiJSY1IAQZQoYwyypWBQuUlKh3WUoQAXkz08BAoLguFObmNV/m5H239pSpNSwEBHlWTUsolisBFUWNIhyNv8S8uzCV4ZsrA1YHL+3ePLxS/duhztmKkFiPKy363d9oA3QmmAxy0p82i6fEbogdZ7J2jXDcSyKQBudb6VWg5HuNZ4oCdBQ6Xf1ktkN2DwtAw5MADp0IYV02lkSEVZdUiFZ7FdnOZjZoC+wFCOeG8I7MKG4etRZ8rA0Nzz2gESPcLjhGRitlDakGuZNHQ3qYCsV4bhS5yirokWavsO88eGIqxV/5tHUxFzlwi1yXXKDyOu+vWWxnL6sLb83UcrG0BWIJhy4SHXBMMmFAViq4cucKNJhSVwuUBWA4JcuIhPJ1v+oT6R4tx2Fw5zYrhATpfOt6nz9OGJIFga7nYdzOv8d4M4n3eMEDuMJQitRVS1Fm10vQfKZZK9PS0F8jXh/2k4fFOVHzH0I/WD8f8YfDULh4efEOwJpR1JMyPDeB4jOXxWBpgRlFAL056+5/eanjXDB3W9qr33kOTPTUUc4/iPGA5mbh2/Nhq3mHoeszvH8DNhjEykdQdwD1951OF9lsJXLlFsnMSAbJ305D2ivjeCpRk5EESW6djS45OMKaLtqoNcxfWBxEm5x3DgIrWOYNetj3o1MxlnRCW5WeNrMSxZKXVJmeyQZw446wTiUcooZTLDukGZaZaYFlgqh2lNIFCQkzwllEBs8susaw8NMq6GyuISTtoPLXcfuJXCwVIstRvRQpJPe9oCBKIXCTMwF1ZAvkLNXJdKOgauWYVGuBQGmy5qYWoaqXTX5n6QAXyUSN6JHrRqXVY+2Gv3jruBiZldQzWL1Xazy9/WD/0rkkkVZO5Cnn1MlmbYFVMMglnwSvT2IPzqNY2AqsQtkUCCd9VB/eITYELGuCwlLqGBonlvsar3huH4UMFN7vlYdBvYPz+UY4LCWwzEgBwNADpvZBgKxNE5wiYcfGDYKZRdkqdiw2IPysX+8s6WxAFgUunOhV6QJbFVw5ZMOMfdVoQR67w+JggVWvlB9+cQmxRUhUSGTDsgaep2jvEYS2iJRpBrtZNknX1r2jJM77ueOHHjwzDevmP0uGKKFFquq6ADzE/mLcvSA+TNRCCD017TvcJwURhtVe24+hE5Ph+FDWp0N/EdgOhE1vC+OsHBIoAWp52u4PtZ9pMo2jt0ebbKpej3iPFBFJAvKMx2F9ACdJgeJ+LYjqrJg+UCyWJ+lXe8e8T4NnYMmVrWsrEhcw9P80ib8Pilcr4uQflQAe1zJcnvQUWrDcJ4v8AChLHNQphqD69Ih4wSLjPD8CmD/1CWY5l8zEtWvIcvaI+MYuZqHM3Ikm3RnOSjZl8S+ZVUDYanqYiUjzpAMlTpSSVI+fyZXklcuxDESLupj73AMkZIi6RZhH3WLYiQQCjCVqFZZSWaJiMuspCKIFBVxSAVB0O46wqcQ4GUMwF3QJAuLiXWAglk76+sbwMdvKuahYFgAGut89zFQI7wqLV0rG9QzFfLWlajnfyETZMmS5fMVzMaJG511r9oZOGe2GU2oLNelAb3cNxq4ZxDke1LXdGlB105sRZ+Us3EgjJrlGxvzGvzciOdcpJLB4AIINA9jsfWaGNjjyZQnwLflFhhpWvoDEUEYVIENh+Gx2XNVeYEHTrzHQ7j3jPCYgFAA5id8xA7WB7xZFjvDYIIzEnQgaC67ntv8oibLO7KSvlBBIJAvUabnWFGK5/EfmYbH4UjE0XMGNryzAjNp84VuHQA5dW5rd5Ouv4oCdiyA3fP5x58UkLqdjmoAa5mI2HeLokKiwFZVMOzWg7nQRg4QO7LoK0s6D2lFWXCRgQET8xPtp9TCjEG2Z625bdp7CTX4Sw7dOsO3CgAkHP/Ly9e8Bq/ATomQG31OoNakcx1/5lFdQ4fzWCDys11MtmNVQIG1jbrRlMHCZiFXViaHqYDvng0sfEKoHXVTTAcwPxKe9XEuJ8WQrnpTWwv6kx3HwRmbBvXDAHrYvMPcn5TDxvs4jsbdxfKzR9hMJcSo+gxOWxN/BPxXxnMQiN8VUu59fSBLs7Anb9Y7/seHhmkGvMwvE4QQoK1Z0X+pgP3i7kipK4v8mIOkXdJq+I8KUcr+HdT2/uIg6zoarg+eapiTpcXdI66RdxApCGIkAwMdx1imIIDQq4gKjGIIKUUZkuDKSwjLCAy6mRgICGJNBVv1OwHvcJw2FncICBZqzsIAWUwywGHDoZLIfYwh0hVEBhPGMMxEsPhxlIusZw4mQMIIzgsRqCR3G8WSMJAh9jJcsbYknuSYXDHMQSw6CAgirCqJVBDlKJEYFVW4QLIUQ2FhlmCqLJ2EAIF7Amjy5H1ldR2mmPB8TQ2oHrt9NYwPBBY8+g3BG4510lrHJ+GigzGVGdqAsnkNTNrwDgQD94dTZC9OhIPPmPnC4XEIVKpQzNkDDTSiSR6AEzM8X+0q4SZODT79wMoy64SVp532Yj8o161OiOCn9ZcVGLtsP45glcZcYbEZH7i7U/Mn5iFfCVhdTlPs/wvEh3bicZnOKoLKxJUa6FRspU1sKozquANCj/AJ85z6rA4O/p6mkzxnHb6v2AYnDquoEQweG+8xkb8KEt2uqH1N+02+MUlTl3O05z7R8cvDcM+GHZMfESsPLecWQC+YfDz1v0menxuU0q4Nc+VQxvnlmp4hwgxBlOhu1boe/Yzn+K8KxU1ZDXVSGH0mH4d41x2CVzn79Cap/jFflerv1udxwXiiY+GSh7FW0dGG6sORnpZNNbt8Hi7oy6fJyOIItiTr+P8Kwixc5gTWgIqyNSBW9zF4nwLGFkKGA2IIth1AnHLDKPgUYDiK4wjvEoymmUg9CKPyMTxusyGJuICNYgi9RlGVLgSkc4VxQBYCnV9eYAN13205yiyqfAe7i/YGv1Ma8L4bM6WwXMaW9bI/T3i12nq/7RhUdNCyaagFlajvpV1tACvDICGs0Qtgdaqx8rPtD4yAEAX8Kk31Kgn9ZQYnnztiAte4Unt0A2lmxELFjmJJvSlH70NpLIkWRYwumhgeERicwrykHVlB3sUDvtGMZDnYlkHmb8QPPot9YhMf8ADMMM4sjKCpYnarGlc72jLIzu5RSRmOgGws1pMnAfUVvYqOKHYmgTrsAdLMCGNhWXcV6x9zyygEmwoGqitATVsTcz0wG0JFacyB35mPYbud3QXuQygnXmRvvEQxpMIFM+1Ciu5JHNe3XpPIZRCbBzroNPMNB0hsPDF6uo9LPyoQEwixldVvmND6Hb9x8pXDQFSQB5FN97NK1e/wBBIwG0Yfw/oRGFBkF0BqTsJ0fDcEMJA1W/NunYf3i3g3Cg5cTQhRS6V5iTZ9gZsBdJ0YY+s2hClbBo/wBR+m8T8VxCFCr8T+QHoN2PrVxh/KR0vT16fKD4hQXwz0DH6XOpJXZTb6M/F8OXEbI4tEULl/Cb+KxzB29I9h8GiKEVQoGwAoCERKd+9fUQx3jtkqKEOM4QEKRoQdCOV6fKJ4ucN5hloG6+F+hs6qd9O81+JW0bsL+WsHirmIHcH5aiTJKaaZUW4SUomOPF3sonDYrnbOxXDQ+mbzV3yxNvBTiO2Nj5WdiDQ1VFXVUW+Q68ySZ0ToQbu7kskqCjBJRQTlKbbkYaeHLlWxyH6SuHwCYeIzqKzhbHK7q5shNIPFwbo/5yP7TTezLYhXE8wHoP0iZWy/UZQD/2g6fOOYHwqDzW/lrABvKNLdvNXQHmfoI0MQ8VpkyZQ1j4mFkdSO84bi8BkYq3z6jqJ3/EYdDXUzlPHsGxm5qfod/2nJnhav4XVmA53i0K7QVziGZUsJWSJZoHT4G7Mp+YYf2lVaiD0+Unh2FkHZhR7cwfmBGMJwlqSAwb4gFcEaaa+hOm9wEe4is7UKFkgDkDqB9ZDIRuCPWW4riA5zVqas7XQAoLyGn1hH4vPoyjKNFA0KDoDz97g0KSKI1awxckkncmz6xexekIpkGY3g4rKcykgjYg0fpGv9Q7fEzH1JPfnM9DGEaAmaXDYZbRaJ6XrW5PoKj3C4iDOPK3l8pOnm6g3pvftMrA4plUhTVmyRue1712hmxcxuhfOuZ611gTRpYbwyPMxHjKPEQ0auHiVGsBvKa/EQo/U/tMlMTrHQdUQUSSNRtbEftUaBHfcNghEVBsPqeZhgYINrJcX68v+J3JLo63wiOLQFWvpfcVrY7wLikDHfKB/UQDCo/I/wCe0U4lqVl/K6KPQutfSWr6IdPkcyalutfQSW3lxtIMmy6K1YKnmDF+DNqD2r5aH9IZW80pwiUK/ic+xYn95V0iGj2INpFQjSsYUDIgxzEI5gi2saAzAw8q/wABJ9CQK96MKqZQWb4jqT+g9BE+A8zue+U/ypZ+pavaOk5vMduQ69zNWZoQ4mc74koOh56fOdDxRnM+ME3W2gv3kTSrkuPLOV4lMrFbujvF4TFOp9TBXPMpDMwSZUS4jNGEGE2UvXlBCk9yCR+hkCFU/wDTI/jXp+VpC4Ryl9KBC9ySL0EBEAS4lLkqYAGSEWDVpcGS0Q0GWGSLoYZGiExhGjKGJq0KjwIaHh9YRWqKh7hVaoCaG0eavga5+IwlPNwfYan9JhZ5v/Y9c3Ep/Crt/wCJA+rCOK5QRj+JHfwiyizzaTvo6GL8ahrMNx9exijPmZWH48mnPyOLvuM1e0ed5lA5McIdmtl6a1mHzW/eaLoza5NxTPNFcfFYDyizF8Hj8xyOMrTPay7GcV9Vre4RF7cyfrEs7Z1FdyegjliVRLPO2tSCYLPmY+0Di4utQoVhnMVxcWQ+JMnj+JYUBzNfOHXLKjFy4RXAx/M6KBWds55jM7EKverJ7ETTR811yJH6bfOI8P4cAjFWouxZ3P5iAPL00A+UrgYhU5FPlF9l6kk7k7+sweqW7/R2LQtw75/YtxrEbbn6TnfFUC2SdeQ9BU3uHx8yZ2YNTOLHQMQP0nM+LYeZmblZnU3cNyOPbtk4vw5TidGb1/XWAhuK0c+sBc84GuTPhuHw8xq+V6bnsO8ADCogIJLKNao3Z9ABtEWaWCqohfKAyuhCuykOpDAjJp1379tVeIdfKqXlFnX8xOv0oX2ggEH4mPovfuek8HTkrH1YfoBACM0MuCchfkGC97IJGnsYN8QGgFCgdLJ9yY8mAn3btnzAMlgKbshvze8BCoM1ODTIHZ9GOGwRTV+alzHpvp1mVpy9r3jp4bEX4gVtfxEC1NHmdeUAPYOCxGYZautWUV3onaMcMgDqBTm9VF16E/XSKDB/iT+oHtyuETD550HufXkJLRm0P8QSxFKa+FTloubJsADvD8QiKthdW0K3YQirF8yd+2o5RAb2cQE9fPfzr1hsEAAjOhBGxLCjyIsb/wB4gosjQgPWWRCwCZlOVt11AV99QNQCPrLJTktlJXYAFRQHwg32G8BURm7zrfsAl4mK3MIB7MwJ/wDUTlcRRyyD0bO3vWn6Tt/sfj4fnRAB5UYH8TjZy3o3LlYmmNXJBFcnWpPFQd4pxPEMvlRM7nldKvd25DtvKjgS2uI7MfyqSiDsFU2R/MTOxL1lt+F+JnO/aQPiHBRD58zEn+DLR+pWamLh4V0iBqNFwcqgjcZhqT6RHFw2V1egaBFc9aO/OYZtTGCqL5OnBppSdyXAXw8cSiqudCo0twWY/IjSNcTwzuLdgCNQVWj+8tw/iOESFZsjdG0vsDsYc4ibhr7dPUTjeecubO1YIR8Md+I4hGLB0bTZl/8AzUvh+KPpnwiOpUg/Q6x1ks2dukGEvtFHU5Y+3+YS02KXn6HsLxLC184Xs3lP/lFf9fh2SXX+ofpLPwik3vBLwCDXKCes2Wuku0ZPQw8bIx/E0o5bY1sFP61UyeGd3fO6NQ2Gm/Pn7e5mwMEchLphVqdJjPVzmqpI2xaaGN32AwOKslcnm/CpoAehvU+kHxPBviMuYgIu6g1nY/mHSE4hEII3u95XhuKsZGNsBoebL37j+010jjKdT78+E6uU4wuHXv0BxeGi1Yo7ArYr3ExfEWOVvNZ03r0o1HfFMY9Zh8Vjaddf3nrTdKjyIK3ZzvGP5205xWE4knMb6mAueYzQTnpUGM4GECCSbo/DYUnvZ5RFEcSBYoUCqmv+0X9bg1Ecx0RnRV18ihlzbOAQRnI22P7yXIysmGTRILjctV1l6qPnAQqDLBoOeBgKgoMJBAywMADpVizQ5neh1rnGcXhigskUfhI1zjqO0UwsUqwYAGuoBG3QwqcUfNmGbNqbvfqDygA7wvEgYbpagtlokHb8Wo9Bp6xdXiwaXDQaJaHsHiWS8pqwVP8AKdxIV4tmlw0mhDStO1//AJ7xShsZCfMVVl7gEhq/qWcIjzX+zXFhOJw2Y0pbKT0DgpftmB9pUHUkxR4Z9ZwsStTtuT07zNxOKfHYqlpgjTNqGxf5TyTvueWm664wxLN2imgvJ6/E3UdB7+mjh8YlQzam7jH9T08GkaW6S/4SFCigKAGg5VyivEgkED/NITE4tIB+LTrOCVHek0ZuOpbRlDDfbScxx/8AqMNs+EX/AJDbKR03se069+ITWjvFndCT/nL/AImKTTtGvaoR8G+0H3lK4bDevhbY9Sp5zWbimAvpMvjMHCb4gNNut77xX7zEwtmzp0J849/xf5vLTFtRvnju+vSXHHjtMbhuNw3Hf5G+hG4Mu2EulNUdsW1Gv/q+n/Eq+MTMkKR+KQMbLuYbmGwdxkLTJ4rhXHmVqKmwe/8Ab+8e/wBwWA4nj1INCWr/ALl2NQtU1wZnF8ZnW6ojRh0P9ukx+Ixtvc+wFfvL8ZxQD920P7fI/qZkcRi5mJB00A9B/c6z1I6jfFOXaPFz4lim0uvAGMbMXuFxIG5ic4rPT09AotPAysm4AWueuRPQAvcsGg54GAqDAyweDE8DABhTLBoANLZoCDKZYGL55YPAKGA0KjxMOZcMYUTR9A8G8dRsMCgpVVVlvcqKzDsaB9bnn8WGbymcCGPWaXgeI33u50U8z2H7zP8AkXKk+z0oa+UIqMo3R12Fxyn4mPpCHHTrfc9YDjbXDFnMTrbAE10s6zG8WdsPEpQtZVPPmLMznpJRfZ0w1sZeUdB5DzI9D/eQwStGNzmE417UZVtu5r30lV8Txi5TLhgg1dkj6rIWlm+jR6nGuzo1w0q8xu+cM+TUDp30mdw/hXEYm+Jhr6Zz/aPf/FWAvEx2PZFAH1ubR0GWXwwlr8Ufpn8Vg4N5s5VvzDT27j1mU3j+Q5WYOORUEn3nUL9meH3IZv52ZvpdSX8GwV0CL8p0w0H1nPP+If4o5k+OodmrsdP1kf703YiN+IeAYebMugrbv2mPjeGgEayJaJIqOuk0NnxRTqfKfpKv4sKoTN4rAoxMLTD1iWlVXZX9dJcUMY2KWNneBYyrGDcwSSVI4cmRzlbJZpTPIJlbgZn/2Q=="/>
     </div>
     
    </div>
  );
}

export default App;
