import { styled } from "@/theme/stitches.config";
import { Box } from '@/components/dom/box'

const BaseCard = styled(Box, {
  borderRadius: '$md',
  backgroundColor: '$card_bg',
  borderWidth: '1px',
  borderStyle: "solid",
  borderColor: '$card_border',
  backdropFilter: 'blur(5px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$3',

  variants: {
    isLink: {
      true: {
        '[data-showhover]': {
          opacity: 0
        },

        '&:hover': {
          backgroundColor: '$primary500',
          color: '$primary100',

          '[data-showhover]': {
            opacity: 1
          }
        }
      }
    },
    status: {
      error: {
        backgroundColor: '$red900',
      }
    }
  }
})

export const Card = ({ ...props }) => {
  return <BaseCard {...props} />;
};

export default Card;