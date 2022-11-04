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
    color: ${({ theme }) => theme.colors.Light_Blue400};
  }

  .index-icon {
    position: absolute;
    left: -13px;
  }
`;

interface Props {
  index: string;
}

const PageIndex = (props: Props) => {
  return (
    <Index>
      <li className="index-first">메인</li>
      <li className="index-last">
        <AiFillCaretRight className="index-icon" size={12} color="#9E9E9E" />
        {props.index}
      </li>
    </Index>
  );
};

export default PageIndex;
