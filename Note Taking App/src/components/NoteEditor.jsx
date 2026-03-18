import { useEditor, EditorContent } from '@tiptap/react'
import { Extension } from '@tiptap/core'
import { useState, useRef, useCallback, useEffect } from 'react'
import StarterKit from '@tiptap/starter-kit'
import { Underline } from '@tiptap/extension-underline'
import { Link } from '@tiptap/extension-link'
import { Image } from '@tiptap/extension-image'
import { TextStyle } from '@tiptap/extension-text-style'
import { Color } from '@tiptap/extension-color'
import { Highlight } from '@tiptap/extension-highlight'
import { Table, TableRow, TableHeader, TableCell } from '@tiptap/extension-table'

// ── Font Size Extension ──────────────────────────────────────────────────────
const FontSize = Extension.create({
  name: 'fontSize',
  addOptions() { return { types: ['textStyle'] } },
  addGlobalAttributes() {
    return [{
      types: this.options.types,
      attributes: {
        fontSize: {
          default: null,
          parseHTML: el => el.style.fontSize?.replace('px', '') || null,
          renderHTML: attrs => attrs.fontSize ? { style: `font-size: ${attrs.fontSize}px` } : {},
        },
      },
    }]
  },
  addCommands() {
    return {
      setFontSize: size => ({ chain }) => chain().setMark('textStyle', { fontSize: size }).run(),
      unsetFontSize: () => ({ chain }) => chain().setMark('textStyle', { fontSize: null }).removeEmptyTextStyle().run(),
    }
  },
})

// ── SVG Icons ────────────────────────────────────────────────────────────────
const BoldIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
const ItalicIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><line x1="19" y1="4" x2="10" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="14" y1="20" x2="5" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="15" y1="4" x2="9" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
const UnderlineIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="4" y1="21" x2="20" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
const LinkIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
const ImageIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/><circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="2"/><polyline points="21 15 16 10 5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
const TableIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/><line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="2"/><line x1="3" y1="15" x2="21" y2="15" stroke="currentColor" strokeWidth="2"/><line x1="9" y1="3" x2="9" y2="21" stroke="currentColor" strokeWidth="2"/><line x1="15" y1="3" x2="15" y2="21" stroke="currentColor" strokeWidth="2"/></svg>
const HeadingIcon = () => ""
const FontSizeIcon = () => ""
const ColorIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="2"/><path d="M12 2 C8 6 5 10 5 13 C5 16.9 8.1 20 12 20 C15.9 20 19 16.9 19 13 C19 10 16 6 12 2Z" fill="currentColor" opacity="0.3"/></svg>
const TrashIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><polyline points="3 6 5 6 21 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M19 6l-1 14H6L5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M10 11v6M14 11v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M9 6V4h6v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
const MergeCellsIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="9" height="18" rx="1" stroke="currentColor" strokeWidth="2"/><rect x="13" y="3" width="9" height="18" rx="1" stroke="currentColor" strokeWidth="2"/><path d="M8 12h8M14 9l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
const SplitCellIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="18" rx="1" stroke="currentColor" strokeWidth="2"/><line x1="12" y1="3" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/><path d="M9 12H5M7 9l-2 3 2 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 12h4M17 9l2 3-2 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
const AddRowIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="11" rx="1" stroke="currentColor" strokeWidth="2"/><line x1="12" y1="3" x2="12" y2="14" stroke="currentColor" strokeWidth="1.5"/><line x1="2" y1="8.5" x2="22" y2="8.5" stroke="currentColor" strokeWidth="1.5"/><line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="10" y1="21" x2="14" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
const AddColIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="3" y="2" width="11" height="20" rx="1" stroke="currentColor" strokeWidth="2"/><line x1="3" y1="12" x2="14" y2="12" stroke="currentColor" strokeWidth="1.5"/><line x1="8.5" y1="2" x2="8.5" y2="22" stroke="currentColor" strokeWidth="1.5"/><line x1="19" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="21" y1="10" x2="21" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>

// ── Constants ────────────────────────────────────────────────────────────────
const HEADING_OPTIONS = [
  { label: 'Paragraph', value: 0 },
  { label: 'Heading 1', value: 1 },
  { label: 'Heading 2', value: 2 },
  { label: 'Heading 3', value: 3 },
  { label: 'Heading 4', value: 4 },
  { label: 'Heading 5', value: 5 },
  { label: 'Heading 6', value: 6 },
]
const FONT_SIZES = [10, 11, 12, 13, 14, 16, 18, 20, 24, 28, 32, 36, 48, 64]
const TEXT_COLORS = [
  '#ffffff','#e2e2e2','#a3a3a3','#666666','#333333',
  '#ef4444','#f97316','#eab308','#22c55e','#3b82f6',
  '#8b5cf6','#ec4899','#06b6d4','#14b8a6','#f59e0b',
]
const GRID_ROWS = 8
const GRID_COLS = 10

// ── Word-style Table Grid Picker ─────────────────────────────────────────────
function TableGridPicker({ onSelect, onClose }) {
  const [hovered, setHovered] = useState({ r: 0, c: 0 })
  const ref = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose()
    }
    setTimeout(() => document.addEventListener('mousedown', handler), 0)
    return () => document.removeEventListener('mousedown', handler)
  }, [onClose])

  return (
    <div ref={ref} style={{
      position: 'absolute', top: 38, left: 0, zIndex: 200,
      background: '#1a1a1a', border: '1px solid #2e2e2e',
      borderRadius: 10, padding: 12,
      boxShadow: '0 12px 32px rgba(0,0,0,0.6)',
    }}>
      <div style={{ fontSize: 11, color: '#666', marginBottom: 8, textAlign: 'center', letterSpacing: '0.05em', minHeight: 16 }}>
        {hovered.r > 0 && hovered.c > 0 ? `${hovered.c} × ${hovered.r} table` : 'Hover to select size'}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${GRID_COLS}, 22px)`, gap: 3 }}>
        {Array.from({ length: GRID_ROWS * GRID_COLS }, (_, i) => {
          const r = Math.floor(i / GRID_COLS) + 1
          const c = (i % GRID_COLS) + 1
          const active = r <= hovered.r && c <= hovered.c
          return (
            <div
              key={i}
              onMouseEnter={() => setHovered({ r, c })}
              onMouseLeave={() => {}}
              onMouseDown={e => {
                e.preventDefault()
                if (hovered.r > 0 && hovered.c > 0) {
                  onSelect(hovered.r, hovered.c)
                }
                onClose()
              }}
              style={{
                width: 22, height: 22, borderRadius: 3, cursor: 'pointer',
                background: active ? 'rgba(59,130,246,0.2)' : '#252525',
                border: `1px solid ${active ? '#3b82f6' : '#2e2e2e'}`,
                transition: 'background 0.06s, border-color 0.06s',
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

// ── Main Editor ──────────────────────────────────────────────────────────────
export default function TiptapEditor() {
  const [showLinkModal, setShowLinkModal] = useState(false)
  const [showImageModal, setShowImageModal] = useState(false)
  const [linkUrl, setLinkUrl] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [showColorPicker, setShowColorPicker] = useState(false)
  const [showTableGrid, setShowTableGrid] = useState(false)
  const [showTableOps, setShowTableOps] = useState(false)
  const [, forceUpdate] = useState(0)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      FontSize,
      Color,
      Highlight.configure({ multicolor: true }),
      Link.configure({ openOnClick: false, HTMLAttributes: { style: 'color:#60a5fa;text-decoration:underline;' } }),
      Image.configure({ HTMLAttributes: { style: 'max-width:100%;border-radius:6px;margin:8px 0;' } }),
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: `<h2>Welcome to the Editor</h2><p>Start writing your content here. Use the toolbar above to format your text with <strong>bold</strong>, <em>italic</em>, <u>underline</u>, and more.</p><p>Click the <strong>table icon</strong> in the toolbar — a grid will appear so you can pick your table size by hovering, just like in Word.</p>`,
    onTransaction: () => forceUpdate(n => n + 1),
    editorProps: {
      attributes: {
        style: 'outline:none;min-height:420px;padding:24px 28px;font-size:16px;line-height:1.85;color:#e2e2e2;font-family:Georgia,serif;',
      },
    },
  })

  const getActiveHeading = useCallback(() => {
    if (!editor) return HEADING_OPTIONS[0]
    for (let i = 1; i <= 6; i++) {
      if (editor.isActive('heading', { level: i })) return HEADING_OPTIONS[i]
    }
    return HEADING_OPTIONS[0]
  }, [editor])

  const getActiveFontSize = useCallback(() => {
    if (!editor) return 16
    const attrs = editor.getAttributes('textStyle')
    return attrs.fontSize ? parseInt(attrs.fontSize) : 16
  }, [editor])

  const applyHeading = v => {
    if (!editor) return
    if (v === 0) editor.chain().focus().setParagraph().run()
    else editor.chain().focus().toggleHeading({ level: v }).run()
  }

  const insertLink = () => {
    if (!editor || !linkUrl) return
    editor.chain().focus().extendMarkRange('link').setLink({ href: linkUrl }).run()
    setLinkUrl(''); setShowLinkModal(false)
  }

  const insertImage = () => {
    if (!editor || !imageUrl) return
    editor.chain().focus().setImage({ src: imageUrl }).run()
    setImageUrl(''); setShowImageModal(false)
  }

  const closeAll = () => {
    setShowColorPicker(false)
    setShowTableGrid(false)
    setShowTableOps(false)
  }

  const Btn = ({ onClick, active, title, children, danger }) => (
    <button
      onMouseDown={e => { e.preventDefault(); onClick && onClick() }}
      title={title}
      style={{
        display:'flex', alignItems:'center', justifyContent:'center',
        width:32, height:32, borderRadius:5, border:'none', cursor:'pointer',
        background: active ? '#2a2a2a' : 'transparent',
        color: danger ? '#f87171' : active ? '#ffffff' : '#a3a3a3',
        transition:'all 0.12s', flexShrink:0,
      }}
      onMouseEnter={e => { e.currentTarget.style.background='#232323'; e.currentTarget.style.color= danger?'#f87171':'#fff' }}
      onMouseLeave={e => { e.currentTarget.style.background= active?'#2a2a2a':'transparent'; e.currentTarget.style.color= danger?'#f87171': active?'#fff':'#a3a3a3' }}
    >{children}</button>
  )

  const Sep = () => <div style={{ width:1, height:20, background:'#2a2a2a', margin:'0 3px', flexShrink:0 }} />

  if (!editor) return null

  const inTable = editor.isActive('table')
  const activeH = getActiveHeading()
  const activeFS = getActiveFontSize()

  return (
    <div style={{ fontFamily:'system-ui,sans-serif' }}>
      <style>{`
        .te * { box-sizing:border-box; }
        .te .ProseMirror { outline:none !important; }
        .te .ProseMirror h1 { font-size:2em;font-weight:700;margin:.5em 0 .25em;color:#f4f4f4; }
        .te .ProseMirror h2 { font-size:1.6em;font-weight:600;margin:.5em 0 .25em;color:#f0f0f0; }
        .te .ProseMirror h3 { font-size:1.3em;font-weight:600;margin:.45em 0 .2em;color:#ececec; }
        .te .ProseMirror h4 { font-size:1.1em;font-weight:600;margin:.4em 0 .2em;color:#e8e8e8; }
        .te .ProseMirror h5,.te .ProseMirror h6 { font-size:1em;font-weight:600;margin:.35em 0 .15em;color:#e2e2e2; }
        .te .ProseMirror p { margin:.3em 0; }
        .te .ProseMirror ul,.te .ProseMirror ol { padding-left:1.4em;margin:.3em 0; }
        .te .ProseMirror li { margin:.15em 0; }
        .te .ProseMirror blockquote { border-left:3px solid #3b82f6;padding-left:1em;color:#a3a3a3;margin:.6em 0;font-style:italic; }
        .te .ProseMirror code { background:#1e1e1e;color:#60a5fa;padding:2px 5px;border-radius:4px;font-family:monospace;font-size:.88em; }
        .te .ProseMirror pre { background:#111;padding:14px;border-radius:8px;overflow-x:auto; }
        .te .ProseMirror pre code { background:none;color:#e2e2e2;padding:0; }

        /* ── Critical table CSS ── */
        .te .ProseMirror .tableWrapper { overflow-x:auto; margin:14px 0; }
        .te .ProseMirror table { border-collapse:collapse; width:100%; table-layout:fixed; }
        .te .ProseMirror th {
          background:#202020; color:#e2e2e2; font-weight:600;
          padding:9px 13px; border:1px solid #363636; text-align:left;
          position:relative;
        }
        .te .ProseMirror td {
          padding:8px 13px; border:1px solid #2c2c2c;
          color:#c8c8c8; vertical-align:top; position:relative; min-width:40px;
        }
        .te .ProseMirror tr:nth-child(even) td { background:#1d1d1d; }
        .te .ProseMirror .selectedCell { background:rgba(59,130,246,0.15) !important; outline:2px solid #3b82f6; }
        .te .ProseMirror .column-resize-handle {
          position:absolute; right:-2px; top:0; bottom:0;
          width:4px; background:#3b82f6; pointer-events:none; z-index:20; cursor:col-resize;
        }
        .te .ProseMirror.resize-cursor, .te .ProseMirror.resize-cursor * { cursor:col-resize !important; }

        .te select { background:#1e1e1e;color:#c8c8c8;border:1px solid #2e2e2e;border-radius:5px;font-size:13px;padding:4px 6px;cursor:pointer;outline:none;height:30px; }
        .te select:focus { border-color:#3b82f6; }
        .te select option { background:#1e1e1e;color:#c8c8c8; }
        .te input[type=text] { background:#1e1e1e;color:#e2e2e2;border:1px solid #333;border-radius:6px;padding:8px 12px;font-size:14px;outline:none;width:100%; }
        .te input[type=text]:focus { border-color:#3b82f6; }
        .te .modal-overlay { position:fixed;inset:0;background:rgba(0,0,0,.72);display:flex;align-items:center;justify-content:center;z-index:1000; }
        .te .modal-box { background:#1a1a1a;border:1px solid #2e2e2e;border-radius:10px;padding:24px;width:360px; }
        .te .modal-title { color:#e2e2e2;font-size:15px;font-weight:600;margin:0 0 14px; }
        .te .modal-row { display:flex;gap:8px;margin-top:12px;justify-content:flex-end; }
        .te .btn-cancel { background:#252525;color:#a3a3a3;border:1px solid #2e2e2e;border-radius:6px;padding:7px 15px;font-size:13px;cursor:pointer; }
        .te .btn-confirm { background:#3b82f6;color:#fff;border:none;border-radius:6px;padding:7px 15px;font-size:13px;cursor:pointer;font-weight:500; }
        .te .btn-cancel:hover { background:#2e2e2e; }
        .te .btn-confirm:hover { background:#2563eb; }
        .te .ops-menu { position:absolute;top:38px;left:0;background:#1a1a1a;border:1px solid #2e2e2e;border-radius:8px;padding:5px;z-index:200;min-width:172px;box-shadow:0 10px 28px rgba(0,0,0,.55); }
        .te .ops-item { display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:5px;cursor:pointer;font-size:13px;color:#c8c8c8;white-space:nowrap; }
        .te .ops-item:hover { background:#222;color:#fff; }
        .te .ops-item.red { color:#f87171; }
        .te .ops-item.red:hover { background:#1f1010; }
        .te .ops-sep { height:1px;background:#252525;margin:4px 0; }
        .te .sw-wrap { position:relative;display:flex;align-items:center; }
        .te .sw-icon { position:absolute;left:7px;color:#a3a3a3;pointer-events:none;display:flex; }
        .te .sw-sel { padding-left:28px !important; }
        .te .cpicker { display:grid;grid-template-columns:repeat(5,1fr);gap:5px; }
        .te .cswatch { width:26px;height:26px;border-radius:50%;cursor:pointer;border:2px solid transparent;transition:border-color .12s; }
        .te .cswatch:hover { border-color:#666; }
      `}</style>

      <div className="te" style={{ background:'#181818', borderRadius:12, border:'1px solid #252525', overflow:'hidden', maxWidth:960, margin:'0 auto' }}>

        {/* ── Toolbar ── */}
        <div style={{ display:'flex', alignItems:'center', gap:3, padding:'9px 12px', flexWrap:'wrap', rowGap:5 }}>

          {/* Heading */}
          <div>
            <select value={activeH.value} onChange={e => applyHeading(Number(e.target.value))} style={{ width:126 }}>
              {HEADING_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>

          {/* Font size */}
          <div >
            <select value={activeFS} onChange={e => editor.chain().focus().setFontSize(String(e.target.value)).run()} style={{ width:76 }}>
              {FONT_SIZES.map(s => <option key={s} value={s}>{s}px</option>)}
            </select>
          </div>

          <Sep />

          <Btn onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive('bold')} title="Bold"><BoldIcon /></Btn>
          <Btn onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive('italic')} title="Italic"><ItalicIcon /></Btn>
          <Btn onClick={() => editor.chain().focus().toggleUnderline().run()} active={editor.isActive('underline')} title="Underline"><UnderlineIcon /></Btn>

          <Sep />

          {/* Color picker */}
          <div style={{ position:'relative' }}>
            <Btn onClick={() => { setShowColorPicker(p => !p); setShowTableGrid(false); setShowTableOps(false) }} title="Text Color">
              <ColorIcon />
            </Btn>
            {showColorPicker && (
              <div style={{ position:'absolute', top:38, left:0, background:'#1a1a1a', border:'1px solid #2e2e2e', borderRadius:9, padding:12, zIndex:200, boxShadow:'0 10px 28px rgba(0,0,0,.55)' }}>
                <div style={{ fontSize:11, color:'#555', marginBottom:8 }}>Text color</div>
                <div className="cpicker">
                  {TEXT_COLORS.map(c => (
                    <div key={c} className="cswatch"
                      style={{ background:c, boxShadow: c==='#ffffff'?'inset 0 0 0 1px #444':'none' }}
                      onMouseDown={e => { e.preventDefault(); editor.chain().focus().setColor(c).run(); setShowColorPicker(false) }}
                    />
                  ))}
                </div>
                <div className="ops-item" style={{ marginTop:8, fontSize:12, padding:'5px 4px' }}
                  onMouseDown={e => { e.preventDefault(); editor.chain().focus().unsetColor().run(); setShowColorPicker(false) }}>
                  Remove color
                </div>
              </div>
            )}
          </div>

          <Sep />

          <Btn onClick={() => { setShowLinkModal(true); setLinkUrl(editor.getAttributes('link').href || '') }} active={editor.isActive('link')} title="Link"><LinkIcon /></Btn>
          <Btn onClick={() => setShowImageModal(true)} title="Insert Image"><ImageIcon /></Btn>

          <Sep />

          {/* Table */}
          <div style={{ position:'relative' }}>
            <Btn
              onClick={() => {
                if (inTable) { setShowTableOps(p => !p); setShowTableGrid(false) }
                else { setShowTableGrid(p => !p); setShowTableOps(false) }
                setShowColorPicker(false)
              }}
              active={inTable}
              title={inTable ? 'Table options' : 'Insert table'}
            >
              <TableIcon />
            </Btn>

            {showTableGrid && (
              <TableGridPicker
                onSelect={(rows, cols) => {
                  editor.chain().focus().insertTable({ rows, cols, withHeaderRow: true }).run()
                  setShowTableGrid(false)
                }}
                onClose={() => setShowTableGrid(false)}
              />
            )}

            {showTableOps && inTable && (
              <div className="ops-menu">
                <div className="ops-item" onMouseDown={e => { e.preventDefault(); editor.chain().focus().addRowBefore().run(); setShowTableOps(false) }}>
                  <AddRowIcon /> Add row above
                </div>
                <div className="ops-item" onMouseDown={e => { e.preventDefault(); editor.chain().focus().addRowAfter().run(); setShowTableOps(false) }}>
                  <AddRowIcon /> Add row below
                </div>
                <div className="ops-item" onMouseDown={e => { e.preventDefault(); editor.chain().focus().addColumnBefore().run(); setShowTableOps(false) }}>
                  <AddColIcon /> Add column before
                </div>
                <div className="ops-item" onMouseDown={e => { e.preventDefault(); editor.chain().focus().addColumnAfter().run(); setShowTableOps(false) }}>
                  <AddColIcon /> Add column after
                </div>
                <div className="ops-sep" />
                <div className="ops-item" onMouseDown={e => { e.preventDefault(); editor.chain().focus().mergeCells().run(); setShowTableOps(false) }}>
                  <MergeCellsIcon /> Merge cells
                </div>
                <div className="ops-item" onMouseDown={e => { e.preventDefault(); editor.chain().focus().splitCell().run(); setShowTableOps(false) }}>
                  <SplitCellIcon /> Split cell
                </div>
                <div className="ops-sep" />
                <div className="ops-item red" onMouseDown={e => { e.preventDefault(); editor.chain().focus().deleteRow().run(); setShowTableOps(false) }}>
                  <TrashIcon /> Delete row
                </div>
                <div className="ops-item red" onMouseDown={e => { e.preventDefault(); editor.chain().focus().deleteColumn().run(); setShowTableOps(false) }}>
                  <TrashIcon /> Delete column
                </div>
                <div className="ops-item red" onMouseDown={e => { e.preventDefault(); editor.chain().focus().deleteTable().run(); setShowTableOps(false) }}>
                  <TrashIcon /> Delete table
                </div>
              </div>
            )}
          </div>

        </div>

        {/* ── Separator line ── */}
        <div style={{ height:1, background:'#a3a3a3', opacity:0.15 }} />

        {/* ── Writing area ── */}
        <div onMouseDown={e => { if (e.target === e.currentTarget) closeAll() }}>
          <EditorContent editor={editor} />
        </div>
      </div>

      {/* ── Link modal ── */}
      {showLinkModal && (
        <div className="te modal-overlay" onClick={() => setShowLinkModal(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <p className="modal-title">Insert Link</p>
            <input type="text" placeholder="https://example.com" value={linkUrl}
              onChange={e => setLinkUrl(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && insertLink()} autoFocus />
            <div className="modal-row">
              {editor.isActive('link') && (
                <button className="btn-cancel" style={{ color:'#f87171', marginRight:'auto' }}
                  onClick={() => { editor.chain().focus().unsetLink().run(); setShowLinkModal(false) }}>
                  Remove link
                </button>
              )}
              <button className="btn-cancel" onClick={() => setShowLinkModal(false)}>Cancel</button>
              <button className="btn-confirm" onClick={insertLink}>Insert</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Image modal ── */}
      {showImageModal && (
        <div className="te modal-overlay" onClick={() => setShowImageModal(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <p className="modal-title">Insert Image</p>
            <input type="text" placeholder="https://example.com/image.jpg" value={imageUrl}
              onChange={e => setImageUrl(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && insertImage()} autoFocus />
            <div className="modal-row">
              <button className="btn-cancel" onClick={() => setShowImageModal(false)}>Cancel</button>
              <button className="btn-confirm" onClick={insertImage}>Insert</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}