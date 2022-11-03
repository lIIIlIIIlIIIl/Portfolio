import styled from "styled-components";
import { AiFillCaretRight } from "react-icons/ai";

const Index = styled.ul`
  width: 100%;
  padding-bottom: 24px;
  > li {
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSize.size12};
    text-align: center;
  }
  .index-first {
    color: ${({ theme }) => theme.colors.black500};
  }

  .index-last {
    position: relative;
    margin-left: 16px;
    color: ${({ theme }) => theme.colors.teal600};
  }

  .index-icon {
    position: absolute;
    left: -13px;
  }
`;

const PageIndex = () => {
  return (
    <Index>
      <li className="index-first">메인</li>
      <li className="index-last">
        <AiFillCaretRight className="index-icon" size={12} color="#9E9E9E" />
        소개
      </li>
    </Index>
  );
};

export default PageIndex;
