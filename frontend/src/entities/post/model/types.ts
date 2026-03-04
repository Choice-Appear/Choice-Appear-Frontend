export interface Board {
  id: number;
  accountId: number;
  title: string;
  contents: string;
  viewCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface BoardWrite {
  title: string;
  contents: string;
}

/* 새 게시글 작성 */
export type NewBoardWrite = BoardWrite;

/* 게시글 목록 조회 */
export interface BoardListResponse {
  content: Board[];
  totalPages: number;
  first: boolean;
  last: boolean;
}

/* 게시글 상세 조회 */
export type BoardDetailResponse = Board;

/* 게시글 수정 */
export type BoardModifyRequest = BoardWrite;

export type BoardModifyResponse = Board;

/* 게시글 삭제 */
export interface BoardDeleteRequest {
  id: number;
}
