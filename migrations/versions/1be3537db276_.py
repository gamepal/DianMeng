"""empty message

Revision ID: 1be3537db276
Revises: a2b5b82000ec
Create Date: 2018-12-19 11:01:54.325743

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '1be3537db276'
down_revision = 'a2b5b82000ec'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('cms_user', sa.Column('password', sa.String(length=100), nullable=False))
    op.drop_column('cms_user', '_password')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('cms_user', sa.Column('_password', mysql.VARCHAR(length=100), nullable=False))
    op.drop_column('cms_user', 'password')
    # ### end Alembic commands ###