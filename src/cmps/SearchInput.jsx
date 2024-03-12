import Input from '@mui/joy/Input';
export default function SearchInput() {
  return (
    <Input
      color="neutral"
      placeholder="Search in members"
      size="sm"
      sx={{ marginBlock: '15px', marginInline: '10px', borderRadius: '20px', border: '1px solid #ccc' }}
      variant="soft"
    />
  )
}

