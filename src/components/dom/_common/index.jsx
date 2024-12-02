import { Stack } from "@/components/dom/flex"
import { Text } from "@/components/dom/text"

export const ListItem = ({ title, institution, summary, location, joinDate, leftDate }) => {
  const locationText = [location.city, location.country].join(', ')
  const dateItems = [
    joinDate.slice(0, 4),
    leftDate?.slice(0, 4)
  ]
  const joinedDates = leftDate ? dateItems.join(' - ') : joinDate.slice(0, 4)
  const dateText = `${joinedDates}${leftDate ? '' : ' →'}`

  const labelContents = []
  institution?.name && labelContents.push(institution.name)
  locationText && labelContents.push(locationText)
  dateText && labelContents.push(dateText)
  const labelContentsString = labelContents.join(' | ')

  return <Stack column gap={2}>
    <Text h3>{title}</Text>
    <Text label color="muted">{labelContentsString}</Text>
    <Text body>{summary}</Text>
  </Stack>
}