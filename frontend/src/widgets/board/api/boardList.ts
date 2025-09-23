export interface Board {
  id: number;
  title: string;
  author: string;
  created_at: string;
  view_count: number;
}

// export interface BoardListResponse {
//   boards: Board[];
//   totalCount: number;
//   currentPage: number;
//   totalPages: number;
// }

// export interface BoardListParams {
//   page?: number;
//   limit?: number;
//   search?: string;
//   boardType?: 'notice' | 'qna' | 'review';
// }

// Mock 데이터
export const mockBoards: Board[] = [
  {
    id: 1,
    title: '게시판 서비스 오픈 안내',
    author: '관리자',
    created_at: '2025-01-15',
    view_count: 156
  },
  {
    id: 2, 
    title: '회원가입 시 주의사항 안내드립니다.',
    author: '운영팀',
    created_at: '2025-01-14',
    view_count: 89
  },
  {
    id: 3,
    title: '이벤트 당첨자 발표',
    author: '이벤트팀',
    created_at: '2025-01-12',
    view_count: 45
  },
  {
    id: 4,
    title: 'FAQ 업데이트 안내',
    author: '고객지원팀',
    created_at: '2025-01-11',
    view_count: 67
  }
];

// API 통신 함수는 추후에 구현
