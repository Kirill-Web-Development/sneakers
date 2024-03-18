export const defaultCardProps = {
    price: 100,
    model: "Nike Air Force 1 '07 QS",
    url: `${process.env.PUBLIC_URL}/assets/images/img.jpg`
}

export const fakeData =  Array.from({ length: 9 }, (_, index) => ({id: index, ...defaultCardProps}));