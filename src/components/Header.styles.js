import tw, { styled } from "twin.macro";

export const HeaderContainer = styled.div`
  ${tw`
    flex
    justify-between
    p-4
    fixed
    top-0
    w-full
    transition-all
    z-10
    bg-blue-200
`}

  ${(props) => (props.dark ? tw`bg-black` : `bg-transparent`)}

    img {
        ${tw`
            h-8
        `}
  }
`;
