Ext.define('Suppliers.Data.SupplierWithItemsNasted', {
    requires: [
        'Suppliers.Data.Init'
    ]
}, function() {
    var companies = {
            "suppliers": [
                {
                    "firstName": "Kostas",
                    "lastName": "Grey",
                    "officeLocation": "Lawrence, KS",
                    "phoneNumber": "(372) 792-6728",
                    "email": "asd@asd.gr",
                    "latitude": "44.968046",
                    "longitude": "-94.420307",
                    "debt": "127",
                    "items": [
                        {
                            "src": "http://www.weedhopper.org/Art/Textures/wood_38.jpg",
                            "caption": "Drawing & Charts 1"
                        },
                        {
                            "src": "http://www.sencha.com/img/20110215-feat-data.png",
                            "caption": "Drawing & Charts"
                        },
                        {
                            "src": "http://www.theodoregray.com/PeriodicTable/Tiles/014/s7.JPG",
                            "caption": "Advanced Dat"
                        }
                    ]
                },
                {
                    "firstName": "Giovanni",
                    "lastName": "Fry",
                    "officeLocation": "Lawrence, KS",
                    "phoneNumber": "(318) 224-8644",
                    "email": "asd@asd.gr",
                    "latitude": "44.33328",
                    "longitude": "-89.132008",
                    "debt": "400",
                    "items": [
                        {
                            "src": "http://www.weedhopper.org/Art/Textures/wood_38.jpg",
                            "caption": "Drawing & Charts 2"
                        },
                        {
                            "src": "http://www.sencha.com/img/20110215-feat-data.png",
                            "caption": "Drawing & Charts"
                        },
                        {
                            "src": "http://www.theodoregray.com/PeriodicTable/Tiles/014/s7.JPG",
                            "caption": "Advanced Dat"
                        }
                    ]
                },
                {
                    "firstName": "Peter",
                    "lastName": "Quill",
                    "officeLocation": "Redwood City, CA",
                    "phoneNumber": "(718) 480-8560",
                    "email": "asd@asd.gr",
                    "latitude": "33.755787",
                    "longitude": "-116.359998",
                    "debt": "427",
                    "items": [
                        {
                            "src": "http://www.weedhopper.org/Art/Textures/wood_38.jpg",
                            "caption": "Drawing & Charts 3"
                        },
                        {
                            "src": "http://www.sencha.com/img/20110215-feat-data.png",
                            "caption": "Drawing & Charts"
                        },
                        {
                            "src": "http://www.theodoregray.com/PeriodicTable/Tiles/014/s7.JPG",
                            "caption": "Advanced Dat"
                        }
                    ]
                },
                {
                    "firstName": "Jessica",
                    "lastName": "Wright",
                    "officeLocation": "Frederick, MD",
                    "phoneNumber": "(812) 522-7104",
                    "email": "asd@asd.gr",
                    "latitude": "44.968046",
                    "longitude": "-94.420307",
                    "debt": "963",
                    "items": [
                        {
                            "src": "http://www.weedhopper.org/Art/Textures/wood_38.jpg",
                            "caption": "Drawing & Charts 4"
                        },
                        {
                            "src": "http://www.sencha.com/img/20110215-feat-data.png",
                            "caption": "Drawing & Charts"
                        },
                        {
                            "src": "http://www.theodoregray.com/PeriodicTable/Tiles/014/s7.JPG",
                            "caption": "Advanced Dat"
                        }
                    ]
                },
                {
                    "firstName": "Juan",
                    "lastName": "Stone",
                    "officeLocation": "Redwood City, CA",
                    "phoneNumber": "(837) 379-6432",
                    "email": "asd@asd.gr",
                    "latitude": "44.968046",
                    "longitude": "-94.420307",
                    "debt": "652",
                    "items": [
                        {
                            "src": "http://www.weedhopper.org/Art/Textures/wood_38.jpg",
                            "caption": "Drawing & Charts 5"
                        },
                        {
                            "src": "http://www.sencha.com/img/20110215-feat-data.png",
                            "caption": "Drawing & Charts"
                        },
                        {
                            "src": "http://www.theodoregray.com/PeriodicTable/Tiles/014/s7.JPG",
                            "caption": "Advanced Dat"
                        }
                    ]

                },
                {
                    "firstName": "Jessica",
                    "lastName": "Jones",
                    "officeLocation": "Redwood City, CA",
                    "phoneNumber": "(662) 494-7517",
                    "email": "asd@asd.gr",
                    "latitude": "44.968046",
                    "longitude": "-94.420307",
                    "debt": "234",
                    "items": [
                        {
                            "src": "http://www.weedhopper.org/Art/Textures/wood_38.jpg",
                            "caption": "Drawing & Charts 6"
                        },
                        {
                            "src": "http://www.sencha.com/img/20110215-feat-data.png",
                            "caption": "Drawing & Charts"
                        },
                        {
                            "src": "http://www.theodoregray.com/PeriodicTable/Tiles/014/s7.JPG",
                            "caption": "Advanced Dat"
                        }
                    ]
                },
                {
                    "firstName": "Rose",
                    "lastName": "Simpson",
                    "officeLocation": "Redwood City, CA",
                    "phoneNumber": "(857) 264-9899",
                    "email": "asd@asd.gr",
                    "latitude": "44.968046",
                    "longitude": "-94.420307",
                    "debt": "752",
                    "items": [
                        {
                            "src": "http://www.weedhopper.org/Art/Textures/wood_38.jpg",
                            "caption": "Drawing & Charts 7"
                        },
                        {
                            "src": "http://www.sencha.com/img/20110215-feat-data.png",
                            "caption": "Drawing & Charts"
                        },
                        {
                            "src": "http://www.theodoregray.com/PeriodicTable/Tiles/014/s7.JPG",
                            "caption": "Advanced Dat"
                        }
                    ]
                },
                {
                    "firstName": "Mildred",
                    "lastName": "Ruiz",
                    "officeLocation": "Redwood City, CA",
                    "phoneNumber": "(443) 323-9518",
                    "email": "asd@asd.gr",
                    "latitude": "44.968046",
                    "longitude": "-94.420307",
                    "debt": "624",
                    "items": [
                        {
                            "src": "http://www.weedhopper.org/Art/Textures/wood_38.jpg",
                            "caption": "Drawing & Charts 8"
                        },
                        {
                            "src": "http://www.sencha.com/img/20110215-feat-data.png",
                            "caption": "Drawing & Charts"
                        },
                        {
                            "src": "http://www.theodoregray.com/PeriodicTable/Tiles/014/s7.JPG",
                            "caption": "Advanced Dat"
                        }
                    ]
                },
                {
                    "firstName": "Ruth",
                    "lastName": "Murphy",
                    "officeLocation": "Lawrence, KS",
                    "phoneNumber": "(516) 884-5081",
                    "email": "asd@asd.gr",
                    "latitude": "44.968046",
                    "longitude": "-94.420307",
                    "debt": "542",
                    "items": [
                        {
                            "src": "http://www.weedhopper.org/Art/Textures/wood_38.jpg",
                            "caption": "Drawing & Charts 9"
                        },
                        {
                            "src": "http://www.sencha.com/img/20110215-feat-data.png",
                            "caption": "Drawing & Charts"
                        },
                        {
                            "src": "http://www.theodoregray.com/PeriodicTable/Tiles/014/s7.JPG",
                            "caption": "Advanced Dat"
                        }
                    ]
                },
                {
                    "firstName": "Alan",
                    "lastName": "Washington",
                    "officeLocation": "Frederick, MD",
                    "phoneNumber": "(725) 915-8297",
                    "email": "asd@asd.gr",
                    "latitude": "44.968046",
                    "longitude": "-94.420307",
                    "debt": "235",
                    "items": [
                        {
                            "src": "http://www.weedhopper.org/Art/Textures/wood_38.jpg",
                            "caption": "Drawing & Charts 10"
                        },
                        {
                            "src": "http://www.sencha.com/img/20110215-feat-data.png",
                            "caption": "Drawing & Charts"
                        },
                        {
                            "src": "http://www.theodoregray.com/PeriodicTable/Tiles/014/s7.JPG",
                            "caption": "Advanced Dat"
                        }
                    ]
                },
                {
                    "firstName": "Catherine",
                    "lastName": "Murphy",
                    "officeLocation": "Redwood City, CA",
                    "phoneNumber": "(227) 546-3855",
                    "email": "asd@asd.gr",
                    "latitude": "44.968046",
                    "longitude": "-94.420307",
                    "debt": "400",
                    "items": [
                        {
                            "src": "http://www.weedhopper.org/Art/Textures/wood_38.jpg",
                            "caption": "Drawing & Charts 11"
                        },
                        {
                            "src": "http://www.sencha.com/img/20110215-feat-data.png",
                            "caption": "Drawing & Charts"
                        },
                        {
                            "src": "http://www.theodoregray.com/PeriodicTable/Tiles/014/s7.JPG",
                            "caption": "Advanced Dat"
                        }
                    ]
                },
                {
                    "firstName": "Helen",
                    "lastName": "Owens",
                    "officeLocation": "Redwood City, CA",
                    "phoneNumber": "(483) 127-7184",
                    "email": "asd@asd.gr",
                    "latitude": "44.968046",
                    "longitude": "-94.420307",
                    "debt": "777",
                    "items": [
                        {
                            "src": "http://www.weedhopper.org/Art/Textures/wood_38.jpg",
                            "caption": "Drawing & Charts 12"
                        },
                        {
                            "src": "http://www.sencha.com/img/20110215-feat-data.png",
                            "caption": "Drawing & Charts"
                        },
                        {
                            "src": "http://www.theodoregray.com/PeriodicTable/Tiles/014/s7.JPG",
                            "caption": "Advanced Dat"
                        }
                    ]
                },
                {
                    "firstName": "Eric",
                    "lastName": "Lee",
                    "officeLocation": "Redwood City, CA",
                    "phoneNumber": "(788) 756-7666",
                    "email": "asd@asd.gr",
                    "latitude": "44.968046",
                    "longitude": "-94.420307",
                    "debt": "466",
                    "items": [
                        {
                            "src": "http://www.weedhopper.org/Art/Textures/wood_38.jpg",
                            "caption": "Drawing & Charts 13"
                        },
                        {
                            "src": "http://www.sencha.com/img/20110215-feat-data.png",
                            "caption": "Drawing & Charts"
                        },
                        {
                            "src": "http://www.theodoregray.com/PeriodicTable/Tiles/014/s7.JPG",
                            "caption": "Advanced Dat"
                        }
                    ]
                },
                {
                    "firstName": "Donald",
                    "lastName": "Dean",
                    "officeLocation": "Lawrence, KS",
                    "phoneNumber": "(846) 214-2178",
                    "email": "asd@asd.gr",
                    "latitude": "44.968046",
                    "longitude": "-94.420307",
                    "debt": "555",
                    "items": [
                        {
                            "src": "http://www.weedhopper.org/Art/Textures/wood_38.jpg",
                            "caption": "Drawing & Charts 14"
                        },
                        {
                            "src": "http://www.sencha.com/img/20110215-feat-data.png",
                            "caption": "Drawing & Charts"
                        },
                        {
                            "src": "http://www.theodoregray.com/PeriodicTable/Tiles/014/s7.JPG",
                            "caption": "Advanced Dat"
                        }
                    ]
                },
                {
                    "firstName": "Ronald",
                    "lastName": "Edwards",
                    "officeLocation": "Lawrence, KS",
                    "phoneNumber": "(342) 146-2793",
                    "email": "asd@asd.gr",
                    "latitude": "44.968046",
                    "longitude": "-94.420307",
                    "debt": "435",
                    "items": [
                        {
                            "src": "http://www.weedhopper.org/Art/Textures/wood_38.jpg",
                            "caption": "Drawing & Charts 99"
                        },
                        {
                            "src": "http://www.sencha.com/img/20110215-feat-data.png",
                            "caption": "Drawing & Charts"
                        },
                        {
                            "src": "http://www.theodoregray.com/PeriodicTable/Tiles/014/s7.JPG",
                            "caption": "Advanced Dat"
                        }
                    ]
                },
                {
                    "firstName": "Carlos",
                    "lastName": "Wright",
                    "officeLocation": "Redwood City, CA",
                    "phoneNumber": "(958) 869-8461",
                    "email": "asd@asd.gr",
                    "latitude": "44.968046",
                    "longitude": "-94.420307",
                    "debt": "722",
                    "items": [
                        {
                            "src": "http://www.weedhopper.org/Art/Textures/wood_38.jpg",
                            "caption": "Drawing & Charts 15"
                        },
                        {
                            "src": "http://www.sencha.com/img/20110215-feat-data.png",
                            "caption": "Drawing & Charts"
                        },
                        {
                            "src": "http://www.theodoregray.com/PeriodicTable/Tiles/014/s7.JPG",
                            "caption": "Advanced Data"
                        }
                    ]
                },
                {
                    "firstName": "Rachel",
                    "lastName": "Kim",
                    "officeLocation": "Lawrence, KS",
                    "phoneNumber": "(921) 823-8187",
                    "email": "asd@asd.gr",
                    "latitude": "33.968046",
                    "longitude": "-24.420307",
                    "debt": "956",
                    "items": [
                        {
                            "src": "http://www.weedhopper.org/Art/Textures/wood_38.jpg",
                            "caption": "Drawing & Charts 16"
                        },
                        {
                            "src": "http://www.sencha.com/img/20110215-feat-data.png",
                            "caption": "Drawing & Charts"
                        },
                        {
                            "src": "http://www.theodoregray.com/PeriodicTable/Tiles/014/s7.JPG",
                            "caption": "Advanced Dat"
                        }
                    ]
                },
                {
                    "firstName": "Jennifer",
                    "lastName": "Day",
                    "officeLocation": "Frederick, MD",
                    "phoneNumber": "(566) 375-8600",
                    "email": "asd@asd.gr",
                    "latitude": "49.968046",
                    "longitude": "-45.420307",
                    "debt": "780",
                    "items": [
                        {
                            "src": "http://www.weedhopper.org/Art/Textures/wood_38.jpg",
                            "caption": "Drawing & Charts 17"
                        },
                        {
                            "src": "http://www.sencha.com/img/20110215-feat-data.png",
                            "caption": "Drawing & Charts"
                        },
                        {
                            "src": "http://www.theodoregray.com/PeriodicTable/Tiles/014/s7.JPG",
                            "caption": "Advanced Dat"
                        }
                    ]
                },
                {
                    "firstName": "Victor",
                    "lastName": "Reid",
                    "officeLocation": "Frederick, MD",
                    "phoneNumber": "(873) 846-5132",
                    "email": "asd@asd.gr",
                    "latitude": "44.968046",
                    "longitude": "-34.420307",
                    "debt": "280",
                    "items": [
                        {
                            "src": "http://www.weedhopper.org/Art/Textures/wood_38.jpg",
                            "caption": "Drawing & Charts 18"
                        },
                        {
                            "src": "http://www.sencha.com/img/20110215-feat-data.png",
                            "caption": "Drawing & Charts"
                        },
                        {
                            "src": "http://www.theodoregray.com/PeriodicTable/Tiles/014/s7.JPG",
                            "caption": "Advanced Dat"
                        }
                    ]
                },
                {
                    "firstName": "Charles",
                    "lastName": "Ramirez",
                    "officeLocation": "Lawrence, KS",
                    "phoneNumber": "(260) 431-1648",
                    "email": "asd@asd.gr",
                    "latitude": "44.968046",
                    "longitude": "-94.420307",
                    "debt": "300",
                    "items": [
                        {
                            "src": "http://www.weedhopper.org/Art/Textures/wood_38.jpg",
                            "caption": "Drawing & Charts 19"
                        },
                        {
                            "src": "http://www.sencha.com/img/20110215-feat-data.png",
                            "caption": "Drawing & Charts"
                        },
                        {
                            "src": "http://www.theodoregray.com/PeriodicTable/Tiles/014/s7.JPG",
                            "caption": "Advanced Dat"
                        }
                    ]
                },
                {
                    "firstName": "Mary",
                    "lastName": "Miller",
                    "officeLocation": "Lawrence, KS",
                    "phoneNumber": "(197) 844-8417",
                    "email": "asd@asd.gr",
                    "latitude": "44.968046",
                    "longitude": "-94.420307",
                    "debt": "400",
                    "items": [
                        {
                            "src": "http://www.weedhopper.org/Art/Textures/wood_38.jpg",
                            "caption": "Drawing & Charts 20"
                        },
                        {
                            "src": "http://www.sencha.com/img/20110215-feat-data.png",
                            "caption": "Drawing & Charts"
                        },
                        {
                            "src": "http://www.theodoregray.com/PeriodicTable/Tiles/014/s7.JPG",
                            "caption": "Advanced Dat"
                        }
                    ]
                },
                {
                    "firstName": "Lawrence",
                    "lastName": "Ramirez",
                    "officeLocation": "Redwood City, CA",
                    "phoneNumber": "(368) 884-2585",
                    "email": "asd@asd.gr",
                    "latitude": "44.968046",
                    "longitude": "-94.420307",
                    "debt": "0",
                    "items": [
                        {
                            "src": "http://www.weedhopper.org/Art/Textures/wood_38.jpg",
                            "caption": "Drawing & Charts 21"
                        },
                        {
                            "src": "http://www.sencha.com/img/20110215-feat-data.png",
                            "caption": "Drawing & Charts"
                        },
                        {
                            "src": "http://www.theodoregray.com/PeriodicTable/Tiles/014/s7.JPG",
                            "caption": "Advanced Dat"
                        }
                    ]
                },
                {
                    "firstName": "Roy",
                    "lastName": "Carroll",
                    "officeLocation": "Frederick, MD",
                    "phoneNumber": "(153) 192-7967",
                    "email": "asd@asd.gr",
                    "latitude": "44.968046",
                    "longitude": "-94.420307",
                    "debt": "60",
                    "items": [
                        {
                            "src": "http://www.weedhopper.org/Art/Textures/wood_38.jpg",
                            "caption": "Drawing & Charts 22"
                        },
                        {
                            "src": "http://www.sencha.com/img/20110215-feat-data.png",
                            "caption": "Drawing & Charts"
                        },
                        {
                            "src": "http://www.theodoregray.com/PeriodicTable/Tiles/014/s7.JPG",
                            "caption": "Advanced Dat"
                        }
                    ]
                },
                {
                    "firstName": "Christopher",
                    "lastName": "Rogers",
                    "officeLocation": "Lawrence, KS",
                    "phoneNumber": "(286) 360-1439",
                    "email": "asd@asd.gr",
                    "latitude": "43.968046",
                    "longitude": "-91.420307",
                    "debt": "1000",
                    "items": [
                        {
                            "src": "http://www.weedhopper.org/Art/Textures/wood_38.jpg",
                            "caption": "Drawing & Charts 23"
                        },
                        {
                            "src": "http://www.sencha.com/img/20110215-feat-data.png",
                            "caption": "Drawing & Charts"
                        },
                        {
                            "src": "http://www.theodoregray.com/PeriodicTable/Tiles/014/s7.JPG",
                            "caption": "Advanced Dat"
                        }
                    ]
                },
                {
                    "firstName": "Phyllis",
                    "lastName": "Patterson",
                    "officeLocation": "Frederick, MD",
                    "phoneNumber": "(915) 877-4798",
                    "email": "asd@asd.gr",
                    "latitude": "44.968046",
                    "longitude": "-94.420307",
                    "debt": "200",
                    "items": [
                        {
                            "src": "http://www.weedhopper.org/Art/Textures/wood_38.jpg",
                            "caption": "Drawing & Charts 24"
                        },
                        {
                            "src": "http://www.sencha.com/img/20110215-feat-data.png",
                            "caption": "Drawing & Charts"
                        },
                        {
                            "src": "http://www.theodoregray.com/PeriodicTable/Tiles/014/s7.JPG",
                            "caption": "Advanced Dat"
                        }
                    ]
                }
            ]
        }
    ;

    //from https://git.daplie.com/Daplie/knuth-shuffle/
    function shuffle (array) {
        array = Ext.Array.clone(array);

        var currentIndex = array.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);

            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];

            array[currentIndex] = array[randomIndex];
            array[randomIndex]  = temporaryValue;
        }

        return array;
    }

    Ext.ux.ajax.SimManager.register({
        type: 'json',
        delay: 300,
        url: /\/data\/SupplierWithItemsNasted(\/\d+)?/,

        data: function(ctx) {
            var idPart = ctx.url.match(this.url)[1],
                id;

            if (idPart) {
                id = parseInt(idPart.substring(1), 10);

                return Ext.Array.findBy(companies, function(company) {
                    return company.id === id;
                });
            } else if (ctx.params.shuffle) {
                return shuffle(companies);
            }

            return companies;
        }
    });
});
