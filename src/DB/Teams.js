const teams= [
    {
        "id": Math.random() ,
        "Name": "Real Madrid",
        "image": "https://upload.wikimedia.org/wikipedia/fr/thumb/c/c7/Logo_Real_Madrid.svg/1468px-Logo_Real_Madrid.svg.png"
    },
    {
        "id": Math.random() ,
        "Name": "Fc Barcelona",
        "image": "./imagessssss/teams/fcb.jpg"
    },
    {
        "id": Math.random() ,
        "Name": "Ac Milan",
        "image": "./imagessssss/teams/acmilan.jpg"
    },
    {
        "id": Math.random() ,
        "Name": "Al Hilal",
        "image": "../imagessssss/teams/al hilal.jpg"
    },
    {
        "id": Math.random() ,
        "Name": "El Nasr",
        "image": "../imagessssss/teams/al nasser.jpg"
    },
    {
        "id": Math.random() ,
        "Name": "Athletico Madrid",
        "image": "../imagessssss/teams/athletice madrid.jpg"
    },
    {
        "id": Math.random() ,
        "Name": "Bayern Munich",
        "image": "../imagessssss/teams/bayern.jpg"
    },
    {
        "id": Math.random() ,
        "Name": "Borrusia Dortmund",
        "image": "../imagessssss/teams/bvb.jpg"
    },
    {
        "id": Math.random() ,
        "Name": "Chelsea",
        "image": "../imagessssss/teams/cheslsea.jpg"
    },
    {
        "id": Math.random() ,
        "Name": "Inter Milan",
        "image": "../imagessssss/teams/inter milan.jpg"
    },
    {
        "id": Math.random() ,
        "Name": "InterMiami",
        "image": "https://i.pinimg.com/564x/c9/ef/9f/c9ef9f5679ecebbe9c08b635fcde70a8.jpg"
    },
    {
        "id": Math.random() ,
        "Name": "psg",
        "image": "https://i.pinimg.com/736x/1c/38/c6/1c38c657b1556b84ec36e48c1c46a696.jpg"
    },
    {
        "id": Math.random() ,
        "Name": "Man United",
        "image": "https://i.pinimg.com/564x/5f/7d/b6/5f7db63e2c0fc694aef02f1c64a31aab.jpg"
    },
    {
        "id": Math.random() ,
        "Name": "juventus",
        "image": "https://i.pinimg.com/564x/65/56/93/655693827b4d11fa2b7fe9b62e7daa00.jpg"
    },
    {
        "id": Math.random() ,
        "Name": "Ajax",
        "image": "https://i.pinimg.com/564x/03/70/3f/03703f65ea847623a342c148599d2fce.jpg"
    },
    {
        "id": Math.random() ,
        "Name": "benfica",
        "image": "https://i.pinimg.com/564x/5f/f2/60/5ff260a234e25422fd3866b77d2be70e.jpg"
    },
    {
        "id": Math.random() ,
        "Name": "man city",
        "image": "https://i.pinimg.com/564x/fb/35/9e/fb359e5a0a0a61fa7ccc40c58b7fa958.jpg"
    },
    {
        "id": Math.random() ,
        "Name": "tottenham",
        "image": "https://i.pinimg.com/564x/2d/24/11/2d241106484a085b0e05fc887b11adcb.jpg"
    },
    {
        "id": Math.random() ,
        "Name": "liverpool",
        "image": "https://i.pinimg.com/564x/37/a8/5e/37a85e4a94fc9eeafa8ade3b988dd155.jpg"
    },
    {
        "id": Math.random() ,
        "Name": "bvb",
        "image": "https://i.pinimg.com/564x/eb/03/96/eb0396580edf700c2135d16e25edfb84.jpg"
    },
    {
        "id": Math.random() ,
        "Name": "everton",
        "image": "https://i.pinimg.com/564x/26/50/0f/26500f4cfbcd2a9d627b12b34a926834.jpg"
    },
    {
        "id": Math.random() ,
        "Name": "seville",
        "image": "https://i.pinimg.com/564x/20/c3/18/20c31823c84a263c98d9a8f5fbe716db.jpg"
    },
    {
        "id": Math.random() ,
        "Name": "Leicester",
        "image": "https://i.pinimg.com/564x/c3/9d/02/c39d023df2626d2d3e84614afd256cac.jpg"
    },
    {
        "id": Math.random() ,
        "Name": "Al Ahli",
        "image": "https://i.pinimg.com/564x/2c/e6/ff/2ce6ff4fd5f4534cb3f04437f9405c4c.jpg"
    },
    {
        "id": Math.random() ,
        "Name": "Bilbao",
        "image": "https://i.pinimg.com/564x/8e/8b/9d/8e8b9d0de6910189f57f6a49a3a9be32.jpg"
    },
    {
        "id": Math.random() ,
        "Name": "arsenal",
        "image": "https://i.pinimg.com/564x/66/4f/6e/664f6e47d4597d37ba263fb399e79b9b.jpg"
    },
    {
        "id": Math.random() ,
        "Name": "Schalke",
        "image": "https://i.pinimg.com/564x/75/d4/35/75d435be85f772fe1659854786f420f0.jpg"
    },
    {
        "id": Math.random() ,
        "Name": "valencia",
        "image": "https://i.pinimg.com/564x/3c/83/18/3c8318a4ffd587a431f51fb9cf070018.jpg"
    },
    {
        "id": Math.random() ,
        "Name": "porto",
        "image": "https://i.pinimg.com/564x/3d/d3/c0/3dd3c05285cdd2d870c0897c29e31c29.jpg"
    },
    {
        "id": Math.random() ,
        "Name": "sosciedad",
        "image": "https://i.pinimg.com/564x/6d/db/38/6ddb38ad70a8b75ed18dcee19af8ecaf.jpg"
    },
    // {
    //     "id": Math.random() ,
    //     "Name": "",
    //     "image": ""
    // },
    // {
    //     "id": Math.random() ,
    //     "Name": "",
    //     "image": ""
    // },
    // {
    //     "id": Math.random() ,
    //     "Name": "",
    //     "image": ""
    // },
]

export default teams