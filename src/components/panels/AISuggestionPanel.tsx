import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown } from 'lucide-react';
import { aiSuggestion } from '../../data/mockData';

const panelStyle: React.CSSProperties = {
  background: 'var(--color-panel)',
  border: '1px solid var(--color-border)',
  borderRadius: '12px',
  overflow: 'hidden',
};

export default function AISuggestionPanel() {
  const [applied, setApplied] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          style={panelStyle}
          exit={{ height: 0, opacity: 0, marginBottom: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
        >
          {/* Header */}
          <div style={{
            padding: '10px 14px',
            borderBottom: '1px solid var(--color-border)',
            display: 'flex', alignItems: 'center', gap: '8px',
          }}>
            <Sparkles size={14} style={{ color: 'var(--color-primary)' }} />
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text)' }}>
              AI Suggestion
            </span>
          </div>

          {/* Body */}
          <AnimatePresence>
            {!applied && (
              <motion.div
                initial={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{ overflow: 'hidden' }}
              >
                <div style={{ padding: '12px 14px' }}>
                  {/* Alert box */}
                  <div style={{
                    background: 'rgba(59,130,246,0.12)',
                    border: '1px solid rgba(59,130,246,0.25)',
                    borderRadius: '8px',
                    padding: '10px 12px',
                    marginBottom: '12px',
                  }}>
                    <p style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-text)', marginBottom: '4px' }}>
                      {aiSuggestion.title}
                    </p>
                    <p style={{ fontSize: '11px', color: 'var(--color-muted)', lineHeight: '1.5' }}>
                      {aiSuggestion.description}
                    </p>
                  </div>

                  {/* Footer actions */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '4px',
                      background: 'rgba(34,197,94,0.15)',
                      border: '1px solid rgba(34,197,94,0.3)',
                      borderRadius: '20px',
                      padding: '3px 8px',
                      fontSize: '12px', fontWeight: 700,
                      color: 'var(--color-green)',
                    }}>
                      {aiSuggestion.saving}
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-green)' }} />
                    </div>
                    <div style={{ flex: 1 }} />
                    <button
                      onClick={() => setDismissed(true)}
                      style={{
                        background: 'transparent',
                        border: '1px solid var(--color-border)',
                        borderRadius: '6px',
                        padding: '5px 12px',
                        fontSize: '12px', color: 'var(--color-muted)',
                        cursor: 'pointer',
                      }}
                    >
                      Dismiss
                    </button>
                    <button
                      onClick={() => setApplied(true)}
                      style={{
                        background: 'var(--color-primary)',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '5px 14px',
                        fontSize: '12px', fontWeight: 600,
                        color: 'white',
                        cursor: 'pointer',
                      }}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {applied && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ padding: '10px 14px', fontSize: '12px', color: 'var(--color-green)', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-green)' }} />
              Optimization applied successfully
            </motion.div>
          )}

          {/* Show more */}
          <div style={{
            padding: '8px 14px',
            borderTop: '1px solid var(--color-border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px',
            cursor: 'pointer',
          }}>
            <span style={{ fontSize: '11px', color: 'var(--color-muted)' }}>Show more</span>
            <ChevronDown size={12} style={{ color: 'var(--color-muted)' }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
