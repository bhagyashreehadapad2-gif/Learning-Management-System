import React from 'react';
import { Award, Printer, X } from 'lucide-react';

const CertificateModal = ({ course, user, onClose }) => {
    if (!course || !user) return null;

    const handlePrint = () => {
        window.print();
    };

    const completionDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="modal-overlay">
            <div className="modal-content" style={{ maxWidth: '800px', padding: '0', background: 'transparent', border: 'none', boxShadow: 'none' }}>
                <div className="no-print" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem', gap: '1rem' }}>
                    <button onClick={handlePrint} className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Printer size={18} /> Print Certificate
                    </button>
                    <button onClick={onClose} className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,0,0,0.5)', border: 'none' }}>
                        <X size={18} /> Close
                    </button>
                </div>

                <div className="print-area certificate-wrapper">
                    <div className="certificate-seal">
                        <Award size={40} color="#fff" />
                    </div>
                    <div className="certificate-header">
                        Certificate of Completion
                    </div>
                    <div className="certificate-body">
                        This is to certify that
                        <div className="certificate-name">{user.username}</div>
                        has successfully completed the premium course
                        <div className="certificate-course">{course.title}</div>
                    </div>
                    <div className="certificate-footer">
                        <div className="certificate-signature">
                            <div style={{ fontFamily: 'cursive', fontSize: '1.5rem', color: '#111827', marginBottom: '0.5rem' }}>LMS Team</div>
                            Issued by Premium LMS
                        </div>
                        <div className="certificate-signature">
                            <div style={{ fontSize: '1.1rem', color: '#111827', marginBottom: '0.5rem', fontWeight: 'bold' }}>{completionDate}</div>
                            Date of Completion
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificateModal;
