import React from 'react'

const ProductCard = () => {
  return (
    <div>
        <img src='https://lp2.hm.com/hmgoepprod?set=source[/63/df/63df7d14611a105208a2b04b4665448ee85f3183.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]' />
        <div>Conscious Choice</div>
        <div>제품 이름 테스트</div>
        <div>&#8361;99900</div>
        <div>신제품</div>
    </div>
  )
}

export default ProductCard

/*
db.json 파일 get

usestate를 통해 db 안의 정보를 나눠 줄 변수 지정, set함수에는 json 파일을 읽어오게 한다

ProductCard 컴포넌트로 db를 읽어올 변수를 props로 수입한다

db의 배열의 index를 뒤집은 다음 map을 걸어 pop으로 db 안의 product 배열의 각 개체에 대한 key에 해당하는 value를 각각 해당 위치에 배치
*/