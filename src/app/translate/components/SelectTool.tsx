export default function SelectTool({ isPending }: { isPending: boolean }) {
  return (
    <select
      disabled={isPending}
      defaultValue="Pick a Translator"
      className="select"
    >
      <option disabled={true}>Pick a Translator</option>
      <option>DeepL</option>
      <option disabled={true}>Chatgpt</option>
      <option disabled={true}>Gemini</option>
      <option disabled={true}>Google Translate</option>
    </select>
  );
}
