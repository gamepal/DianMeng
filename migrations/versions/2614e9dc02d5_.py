"""empty message

Revision ID: 2614e9dc02d5
Revises: 9591cefece0a
Create Date: 2018-12-23 12:28:40.019870

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2614e9dc02d5'
down_revision = '9591cefece0a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('post', sa.Column('read_num', sa.Integer(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('post', 'read_num')
    # ### end Alembic commands ###
