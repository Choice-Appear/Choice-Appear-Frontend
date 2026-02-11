/* 상품 목록 조회 */
export interface ProductsListResponse {
  id: number;
  name: string;
  // gender: ;
  // category: ;
  price: number;
  thumbnailImage: string;
}

// 신상품
export type LatestProducts = ProductsListResponse;

// 할인 상품
export type DiscountProducts = ProductsListResponse;

/* 상품 조회 요청 */
export interface ProductsId {
  productsId: number;
}

// 상세 조회
export interface ProductsDetailResponse {
  id: number;
  name: string;
  // ..작성중
}

// 옵션 조회
export interface ProductsOptionResponse {
  id: number;
  color: string;
  size: string;
  stockQuantity: number;
  discountRate: number;
  finalPrice: number;
}

// 이미지 조회
export interface ProductsImageResponse {
  id: number;
  color: string;
  primaryImage: string;
  imageUrl: string;
  imageOrder: string;
}
