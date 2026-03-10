import { useEffect, useRef } from 'react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const tools = [
  { cmd: 'formatBlock', value: 'h1', label: 'H1', title: 'Heading 1' },
  { cmd: 'formatBlock', value: 'h2', label: 'H2', title: 'Heading 2' },
  { cmd: 'formatBlock', value: 'h3', label: 'H3', title: 'Heading 3' },
  { cmd: 'formatBlock', value: 'p', label: 'P', title: 'Paragraph' },
  { cmd: 'bold', value: '', label: '<b>B</b>', title: 'Bold' },
  { cmd: 'italic', value: '', label: '<i>I</i>', title: 'Italic' },
  { cmd: 'underline', value: '', label: '<u>U</u>', title: 'Underline' },
  { cmd: 'strikeThrough', value: '', label: '<s>S</s>', title: 'Strikethrough' },
  { cmd: 'insertUnorderedList', value: '', label: '&#8226;&#8212;', title: 'Bullet List' },
  { cmd: 'insertOrderedList', value: '', label: '1&#8212;', title: 'Numbered List' },
  { cmd: 'justifyLeft', value: '', label: '&#8676;', title: 'Align Left' },
  { cmd: 'justifyCenter', value: '', label: '&#8633;', title: 'Center' },
  { cmd: 'justifyRight', value: '', label: '&#8677;', title: 'Align Right' },
  { cmd: 'removeFormat', value: '', label: '&#10006;', title: 'Clear Formatting' },
];

export const RichTextEditor = ({ value, onChange, placeholder }: RichTextEditorProps) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const isInternalChange = useRef(false);

  useEffect(() => {
    if (editorRef.current && !isInternalChange.current) {
      editorRef.current.innerHTML = value || '';
    }
    isInternalChange.current = false;
  }, [value]);

  const exec = (cmd: string, val: string) => {
    editorRef.current?.focus();
    document.execCommand(cmd, false, val || undefined);
    if (editorRef.current) {
      isInternalChange.current = true;
      onChange(editorRef.current.innerHTML);
    }
  };

  const handleInput = () => {
    if (editorRef.current) {
      isInternalChange.current = true;
      onChange(editorRef.current.innerHTML);
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const html = e.clipboardData.getData('text/html');
    const text = e.clipboardData.getData('text/plain');

    if (html) {
      const cleaned = cleanPastedHtml(html);
      document.execCommand('insertHTML', false, cleaned);
    } else {
      const lines = text.split('\n').map(line => `<p>${line || '<br>'}</p>`).join('');
      document.execCommand('insertHTML', false, lines);
    }
    if (editorRef.current) {
      isInternalChange.current = true;
      onChange(editorRef.current.innerHTML);
    }
  };

  return (
    <div className="border border-zinc-300 overflow-hidden">
      <div className="flex flex-wrap gap-1 p-2 border-b border-zinc-200 bg-zinc-50">
        {tools.map((t, i) => (
          <button
            key={i}
            type="button"
            title={t.title}
            onMouseDown={(e) => { e.preventDefault(); exec(t.cmd, t.value); }}
            className="px-2 py-1 text-xs border border-zinc-300 bg-white hover:bg-zinc-100 transition-colors min-w-[28px]"
            dangerouslySetInnerHTML={{ __html: t.label }}
          />
        ))}
      </div>
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        onPaste={handlePaste}
        data-placeholder={placeholder}
        className="min-h-[400px] p-4 focus:outline-none blog-editor-content"
      />
    </div>
  );
};

function cleanPastedHtml(html: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  const remove = doc.querySelectorAll('script, style, meta, link, head');
  remove.forEach(el => el.remove());

  const allElements = doc.body.querySelectorAll('*');
  allElements.forEach(el => {
    const allowed = ['b', 'strong', 'i', 'em', 'u', 'strike', 's', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'ul', 'ol', 'li', 'br', 'a', 'blockquote'];
    if (!allowed.includes(el.tagName.toLowerCase())) {
      el.replaceWith(...Array.from(el.childNodes));
    } else {
      const attrs = Array.from(el.attributes);
      attrs.forEach(attr => {
        if (attr.name !== 'href') el.removeAttribute(attr.name);
      });
    }
  });

  return doc.body.innerHTML;
}
