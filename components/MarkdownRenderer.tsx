import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
    filename: string;
    className?: string;
    noProse?: boolean;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ filename, className = '', noProse = false }) => {
    const [content, setContent] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                setLoading(true);
                // We use a relative path for public files
                const response = await fetch(`/content/${filename}`);
                if (!response.ok) {
                    throw new Error('No se pudo cargar el contenido');
                }
                const text = await response.text();
                setContent(text);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Error desconocido');
            } finally {
                setLoading(false);
            }
        };

        fetchContent();
    }, [filename]);

    if (loading) {
        return (
            <span className="inline-block animate-pulse bg-gray-200 dark:bg-gray-700 h-4 w-full rounded"></span>
        );
    }

    if (error) {
        return (
            <span className="text-red-500 text-xs">{error}</span>
        );
    }

    const proseClass = noProse ? '' : `prose dark:prose-invert max-w-none 
    prose-headings:text-gray-900 dark:prose-headings:text-white
    prose-p:text-gray-600 dark:prose-p:text-gray-300
    prose-a:text-primary prose-a:no-underline hover:prose-a:underline`;

    return (
        <div className={`${proseClass} ${className}`}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
            </ReactMarkdown>
        </div>
    );
};

export default MarkdownRenderer;
